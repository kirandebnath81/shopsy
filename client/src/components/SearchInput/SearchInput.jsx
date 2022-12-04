import { useState } from "react";

//icons
import { VscChromeClose } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";

//styles
import { StyledForm, StyledInput } from "./SearchInput.styles";

//router
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SearchInput = () => {
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");

  const changeHandler = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  //search
  const searchHandler = () => {
    if (inputText === "") {
      toast.error("Please enter product name", { theme: "colored" });
      return;
    }
    navigate(`/search/${inputText}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchHandler();
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput
        type="text"
        value={inputText}
        onChange={(e) => changeHandler(e)}
        placeholder="Search"
      />
      {inputText && (
        <div
          className="search__icon search__icon--cross"
          onClick={() => setInputText("")}
        >
          <VscChromeClose />
        </div>
      )}
      <div
        className="search__icon search__icon--search"
        onClick={searchHandler}
        data-info="Search"
      >
        <IoSearchOutline />
      </div>
    </StyledForm>
  );
};

export default SearchInput;
