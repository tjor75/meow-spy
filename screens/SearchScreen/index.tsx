import { useState } from "react";
import { ActivityIndicator, ScrollView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CatHouse, getCatHousesByQuery } from "../../lib/meow-camera";
import useTheme from "../../hooks/useTheme";
import Screen from "../../components/UI/Screen";
import Header from "../../components/Header";
import CatHousesList from "../../components/CatHouses/CatHousesList";
import ExactResult from "../../components/ExactResult";
import styles from "./styles";

export default function SearchScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [hadLastQuery, setHadLastQuery] = useState(false);
  const [exactResult, setExactResult] = useState<CatHouse | null>(null);
  const [searchResults, setSearchResults] = useState<CatHouse[]>([]);

  const search = async () => {
    if (searchQuery.trim() === "") {
      setHadLastQuery(false);
      setExactResult(null);
      setSearchResults([]);
      setError(null);
      return;
    }

    setLoading(true);

    getCatHousesByQuery(searchQuery).then(results => {
      const exact = results.find(catHouse => (
        catHouse.id === searchQuery ||
        catHouse.name.toLowerCase() === searchQuery.toLowerCase() ||
        catHouse.englishName?.toLowerCase() === searchQuery.toLowerCase() ||
        catHouse.translatedName?.toLowerCase() === searchQuery.toLowerCase()
      )) || null;
      setExactResult(exact);

      const filteredResults = exact ? results.filter(catHouse => catHouse.id !== exact.id) : results;
      setSearchResults(filteredResults);
    }).catch(err => {
      setError(err.message);
    }).finally(() => {
      setHadLastQuery(true);
      setLoading(false);
    });
  };

  return (
    <Screen>
      <Header>
        <TextInput
          style={[styles.searchField, { color: theme.color, backgroundColor: theme.altBackground }]}
          onChangeText={setSearchQuery}
          onSubmitEditing={search}
          value={searchQuery}
          placeholder="Search"
          enterKeyHint="search"
        />
      </Header>
      <ScrollView>
        {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
        {error && <Feather name="alert-circle" size={24} color="red" style={{ marginTop: 20 }} />}
        {hadLastQuery && !(loading || error) && (
          <>
            <ExactResult catHouse={exactResult} />
            <CatHousesList catHouses={searchResults} goBack={true} />
          </>
        )}
      </ScrollView>
    </Screen>
  );
}
