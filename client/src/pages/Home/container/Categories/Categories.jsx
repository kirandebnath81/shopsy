import { v4 } from "uuid";

// images
import images from "../../../../constants/images";

//styles
import { Container } from "./Categories.styles";
import { TitleBox } from "../../Home.styles";

//context
import { useFilters, ACTION_TYPE } from "../../../../contexts";

//router
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const { dispatch } = useFilters();

  const categoriesList = [
    { name: "Men's Cloths", imgUrl: images.men, id: v4() },
    { name: "Women's Cloths", imgUrl: images.women, id: v4() },
    { name: "Jewelry", imgUrl: images.jewelry, id: v4() },
    { name: "Electronics", imgUrl: images.electronics, id: v4() },
  ];

  const clickHandler = (category) => {
    let name;

    if (category === "Men's Cloths") {
      name = "mensCloths";
    } else if (category === "Women's Cloths") {
      name = "womensCloths";
    } else {
      name = category.split(" ").join("").toLowerCase();
    }

    dispatch({
      type: ACTION_TYPE.SET_CATEGORIES_FILTER,
      value: {
        name,
        checked: true,
      },
    });

    navigate("/explore");
  };

  return (
    <Container>
      <TitleBox>Featured Categories</TitleBox>
      <div className="categories__items">
        {categoriesList.map(({ name, imgUrl, id }) => (
          <div
            className="categories__item"
            key={id}
            onClick={() => clickHandler(name)}
          >
            <img src={imgUrl} alt={name} />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
