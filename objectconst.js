function Country(name, population, gdp, city) {
    this.CountryName = name;
    this.itsPopulation = population;
    this.itsgdp = gdp;
    this.CapCity = city;
  }
  const myCountry = new Country ("Uganda", "60 million", 27, "Kampala")
  console.log(myCountry.CountryName)
  console.log(myCountry.CapCity)
  console.log(myCountry.itsPopulation)
  console.log(myCountry.itsgdp)

  const myCountry2 = new Country ("Kenya", "76 million", 48, "Nairobi")
  console.log(myCountry2.CountryName)
  console.log(myCountry2.CapCity)
  console.log(myCountry2.itsPopulation)
  console.log(myCountry2.itsgdp)

//Another object constractor with a default value 
function TV(brand, size, type, year) {
    this.brandname = brand;
    this.itssize = size;
    this.itstype = type;
    this.itsyear = year;
    this.itscolor = "black"
    this.itsFullname = function() {
        return this.brandname + " " + this.itssize;
      };
}
    TV.prototype.itsWarranty = "2 YEARS"
    TV.prototype.itsFormFactor = "Slim Bazel"
  
  const myTV = new TV ("Sony", 55, "smartTV", 2024, )
  console.log(myTV.itscolor)
  const mySamsungTV = new TV ("Samsung", 60, "smartTV", 2020,)
  mySamsungTV.itsCost = "5 million Shs" 
  console.log(mySamsungTV.itsCost)
  console.log(mySamsungTV.itsWarranty)
  console.log(myTV.itsFormFactor)
  console.log(myTV.itsWarranty)
  console.log(myTV.itsFullname())
