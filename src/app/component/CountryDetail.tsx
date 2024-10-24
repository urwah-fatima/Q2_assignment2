// Creating a component CountryDetails that takes 'data' as a prop
export default function CountryDetails(data: any) {
    return (
      <div>
        {/* Conditional rendering based on the presence of countryInfo */}
        {/* If the countrInfo is not undefined, dispaly the country details */}
        {data.countryInfo ? (
          <div>
            <h1>Name: {data.countryInfo.name}</h1>
            <h1>Population: {data.countryInfo.population}</h1>
            <h1>Capital: {data.countryInfo.capital}</h1>
          </div>
        ) : (
          // If the countryInfo doesn't exit/ is undefined, disaplay "Country Not Found" message
          <h1 style={{ color: "red" }}>
            <b>Country Not Found</b>
          </h1>
        )}
      </div>
    );
  }
  