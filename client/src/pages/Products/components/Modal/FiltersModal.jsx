//styles
import { Container, Box } from "./styles/Modal.styles";

//component
import Filters from "../Filters/Filters";

//custom-hook
import { useClickOutside, useResize } from "../../../../custom-hook";

//context
import { useModal } from "../../../../contexts";

const FiltersModal = () => {
  const { setOpenFilters } = useModal();

  //custom-hooks
  const nodeRef = useClickOutside(() => {
    setOpenFilters(false);
  });

  //closing filter modal  in the large screen
  useResize(() => setOpenFilters(false));

  return (
    <Container>
      <Box ref={nodeRef}>
        <Filters />
      </Box>
    </Container>
  );
};

export default FiltersModal;
