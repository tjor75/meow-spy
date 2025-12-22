import { TextInput } from "react-native";
import useTheme from "../../../hooks/useTheme";
import styles from "./styles";

type SearchHeaderProps = {
    
};

export default function SearchHeader({  }: SearchHeaderProps) {
    const { theme } = useTheme();

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
        <TextInput
            style={[styles.searchField, { color: theme.color, backgroundColor: theme.buttonBg }]}
            onChangeText={setSearchQuery}
            onSubmitEditing={search}
            value={searchQuery}
            placeholder="Search"
            enterKeyHint="search"
        />
    );
}