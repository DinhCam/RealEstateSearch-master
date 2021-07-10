class Constants {
  static squareMeter = "m²";
  // static host = "http://localhost:8080/";
  static host =
    "http://realestatebackend-env.eba-9zjfbgxp.ap-southeast-1.elasticbeanstalk.com/";
  static getRealEstateRef =
    Constants.host + "api/v1/realEstate/getAllRealEstate";
  static getRealEstateDetailRef =
    Constants.host + "api/v1/realEstate/getRealEstateDetail/";
  // static getRealEstateRef =
  //   Constants.host + "api/v1/realEstate/getRealEstateDetail";
  static getRealEstateAssignStaffRef =
    Constants.host + "api/v1/realEstate/getRealEstateAssignStaff";
  static createTransactionRef =
    Constants.host + "api/v1/transaction/createTransaction";
  static getTransactionByUserId =
    Constants.host + "api/v1/transaction/getTransactionByUserId";
  static createUser = Constants.host + "apis/v1/accounts/create";
}

export default Constants;
