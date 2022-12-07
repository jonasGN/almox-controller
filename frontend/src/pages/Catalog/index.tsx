import { Paths } from "@/routes";
import { useNavigation } from "@/hooks/common";

import { ShowWhenHasRoles } from "@/layout";
import { CatalogItemList } from "./CatalogItemList";
import { OptionButton } from "@/components/Buttons";
import { SearchBar } from "@/components/Inputs";
import { PageHeader } from "@/components/PageHeader";

export const CatalogPage = (): JSX.Element => {
  const { navigateTo } = useNavigation();

  return (
    <>
      <PageHeader title="Catálogo">
        {/* <ShowWhenHasRoles allowedRoles={["admin"]}> */}
        <OptionButton icon="add" onClick={() => navigateTo(Paths.ITEMS_ADD)} />
        {/* </ShowWhenHasRoles> */}

        <SearchBar name="searchItems" placeholder="Buscar item" onSearch={(term) => {}} />
      </PageHeader>

      <CatalogItemList />
    </>
  );
};
