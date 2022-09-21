import { Paths } from "@/routes";
import { useNavigation } from "@/hooks/common";

import { ShowWhenHasRoles } from "@/layout";
import { CatalogItemList } from "./CatalogItemList";
import { OptionButton } from "@/components/Buttons";
import { AddIcon } from "@/components/Icons";
import { SearchBar } from "@/components/Inputs";
import { PageHeader } from "@/components/PageHeader";

export const CatalogPage = (): JSX.Element => {
  const { navigateTo } = useNavigation();

  return (
    <>
      <PageHeader title="Catálogo">
        {/* <ShowWhenHasRoles allowedRoles={["admin"]}> */}
        <OptionButton icon={<AddIcon />} onClick={() => navigateTo(Paths.ITEMS_ADD)} />
        {/* </ShowWhenHasRoles> */}

        <SearchBar name="searchItems" onSearch={(term) => {}} />
      </PageHeader>

      <CatalogItemList />
    </>
  );
};
