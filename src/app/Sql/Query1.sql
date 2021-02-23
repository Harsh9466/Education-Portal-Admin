--  select
--  A.mLocationName as CountryName,
--  B.mLocationName as StateName,
--  C.mLocationName as CityName
--  from MasterLocation as A left join MasterLocation as B  on A.mLocationId=B.mLocationParentId left join MasterLocation as C  on B.mLocationId=C.mLocationParentId  where A.mLocationType='country'

--  select * from MasterLocation where mLocationParentId=2 and mLocationType='country'

-- spMasterLocationTypeGet 'country'

-- select * from MasterLocation where mLocationType='country' 
-- sp_helptext spMasterLocationTypeGet
-- spMasterLocationInsert 


-- CREATE PROC dbo.spMasterLocationTypeGet(@mLocationType VARCHAR(50))
-- AS
-- select 
--  mLocationId,mLocationCode,mLocationName,isnull(mLocationPinCode,'') as mLocationPinCode,mLocationType,mLocationSerialNo, isnull(mLocationParentId,'') as	mLocationParentId,mLocationIsActive  from MasterLocation where mLocationType=@mLocationType;

--  or 

-- update MasterLocation set mLocationParentId=1 where mLocationId=33

--  spMasterLOCATIONiNSERT 'CL','California',0,'State',32,1

--  spMasterLocationTypeGet1 32

select * from MasterLocation 

CREATE PROC dbo.spMasterLocationTypeGet(@mLocationType VARCHAR(50),@isactive int=-1)
AS
select 
 mLocationId,mLocationCode,mLocationName,isnull(mLocationPinCode,'') as mLocationPinCode,mLocationType,mLocationSerialNo, isnull(mLocationParentId,'') as	mLocationParentId,mLocationIsActive  from MasterLocation where mLocationType=@mLocationType and ( @is
active=-1 or mLocationIsActive=@isactive)


sp_helptext spMasterLocationByType
exec spMasterLocationByParentId 1
exec spMasterLocationByType 'country'

create proc spMasterLocationByTypeParentId(@mLocationType VARCHAR(20),@mLocationParentId int=0,@mLocationIsActive int=-1)
as 
select * from MasterLocation WHERE mLocationType = @mLocationType and(mLocationParentId = @mLocationParentId or @mLocationParentId = 0 ) and (
@mLocationIsActive=-1 or mLocationIsActive=@mLocationIsActive)

use dbEdushalacollege


spMasterLocationByTypeParentId 'country'



