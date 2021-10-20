import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [keyWord, setKeyword] = useState({
    near: "",
    query: "",
  });

  const [touched, setTouched] = useState({
    near: false,
    query: false,
  });

  const defineBorderNear = (touched) => {
    let x = touched ? "border-danger form-control" : "form-control";
    return x;
  };
  const defineBorderQuery = (touched) => {
    let x = touched ? "border-danger form-control" : "form-control";
    return x;
  };

  const schemaValidation = {
    near: [
      {
        validation: keyWord.near.length < 4,
      },
    ],
    query: [
      {
        validation: keyWord.near.length < 4,
      },
    ],
  };

  const handleBlurNear = (event) => {
    const { name } = event.target;

    if (schemaValidation.near[0].validation) {
      setTouched({ ...touched, [name]: true });
    } else {
      setTouched({ ...touched, [name]: false });
    }
  };

  const handleBlurQuery = (event) => {
    const { name } = event.target;

    if (schemaValidation.query[0].validation) {
      setTouched({ ...touched, [name]: true });
    } else {
      setTouched({ ...touched, [name]: false });
    }
  };
  useEffect(() => {
    defineBorderNear();
    defineBorderQuery();
  }, [touched]);

  return (
    <div className="search-bar">
      <label>Encontre os melhores produtos e serviços:</label>
      <form className="form">
        <input
          type="text"
          className={defineBorderNear(touched.near)}
          id="localidade"
          name="near"
          placeholder="Localidade"
          onChange={(e) => setKeyword({ ...keyWord, near: e.target.value })}
          onBlur={handleBlurNear}
        />

        <input
          type="text"
          className={defineBorderQuery(touched.query)}
          name="query"
          id="produtoouservico"
          placeholder="Produto ou serviço"
          onChange={(e) => setKeyword({ ...keyWord, query: e.target.value })}
          onBlur={handleBlurQuery}
        />

        <Link
          to={{
            pathname: "/result-page",
            state: { near: keyWord.near, query: keyWord.query },
          }}
        >
          <button
            type="submit"
            className="btn btn-primary submit"
            style={{ width: "100px" }}
            disabled={!keyWord.near.length || !keyWord.query.length}
          >
            Enviar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
