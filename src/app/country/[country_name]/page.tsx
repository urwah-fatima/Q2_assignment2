"use client";

import { useParams } from "next/navigation";
import CountryDetails from "@/app/component/CountryDetail";

export default function CountryName() {
  const params = useParams();
  const country_name = params?.country_name as string; // Access the route segment correctly

  const countries = {
    pakistan: {
      name: "Pakistan",
      population: "234.23 million",
      capital: "Islamabad",
    },
    iran: {
      name: "Iran",
      population: "88.55 million",
      capital: "Tehran",
    },
    china: {
      name: "China",
      population: "141.9 million",
      capital: "Beijing",
    },
    india: {
      name: "India",
      population: "1.417 billion",
      capital: "New Delhi",
    },
    bangladesh: {
      name: "Bangladesh",
      population: "172.2 million",
      capital: "Dhaka",
    },
    iraq: {
      name: "Iraq",
      population: "44 million",
      capital: "Baghdad",
    },
  };

  // Ensure the country_name is lowercase and defined before accessing the countries object
  const countryKey = country_name?.toLowerCase();

  // Retrieve the country details using the countryKey
  const country = countryKey
    ? countries[countryKey as keyof typeof countries]
    : undefined;

  //  Render the CountryDetails component, passing the country information as a prop "countryInfo"
  return <CountryDetails countryInfo={country} />;
}
