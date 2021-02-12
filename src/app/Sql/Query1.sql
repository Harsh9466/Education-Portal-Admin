 select
 A.mLocationName as CountryName,
 B.mLocationName as StateName,
 C.mLocationName as CityName
 from MasterLocation as A left join MasterLocation as B  on A.mLocationId=B.mLocationParentId  left join MasterLocation as C on B.mLocationId=C.mLocationParentId
