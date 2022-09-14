import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes";

import { CatalogItemList } from "./CatalogItemList";
import { OptionButton } from "../../components/Buttons";
import { AddIcon } from "../../components/Icons";
import { SearchBar } from "../../components/Inputs";
import { PageHeader } from "../../components/PageHeader";
import { ShowWhenHasRoles } from "../../layout";

export const CatalogPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="Catálogo">
        {/* <ShowWhenHasRoles allowedRoles={["admin"]}> */}
        <OptionButton icon={<AddIcon />} onClick={() => navigate(Paths.ITEMS_ADD)} />
        {/* </ShowWhenHasRoles> */}

        <SearchBar onSearch={(term) => {}} />
      </PageHeader>

      <CatalogItemList />
    </>
  );
};
