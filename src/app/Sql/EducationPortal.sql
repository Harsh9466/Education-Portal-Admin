-- use dbEdushalacollege;


-- --MasterLocation
-- create table dbo.MasterLocation
-- (
-- 	mLocationId int primary key identity,
-- 	mLocationCode varchar(10),
-- 	mLocationName varchar(50),
-- 	mLocationPinCode int,
-- 	mLocationType varchar(20),
-- 	mLocationSerialNo int,
-- 	mLocationParentId int references MasterLocation(mLocationId),
-- 	mLocationIsActive int,
-- )

-- spMasterTypeDetailsGet
-- --select
-- alter proc dbo.spMasterLocationGet(@mLocationId int = 0)
-- as 	
-- select mLocationId,mLocationCode,mLocationName,isnull(mLocationPinCode,'') as mLocationPinCode,mLocationType,mLocationSerialNo, isnull(mLocationParentId,'') as	mLocationParentId,mLocationIsActive from MasterLocation where mLocationId=@mLocationId or @mLocationId=0;
 
-- sp_helptext spMasterLocationInsert
-- --sp_helptext spMasterLocationInsert


-- spMasterLocationGet 
-- spMasterLocationInsert 'MP', 'Madhya Pradesh', 0, 'state', 0, 1 
-- --insert
-- alter proc dbo.spMasterLocationInsert(@mLocationCode varchar(10),@mLocationName varchar(50),@mLocationPinCode int,@mLocationType varchar(20),@mLocationParentId int,@mLocationIsActive int)
-- as
-- 	declare @mLocationSerialNo int
-- 	if exists(select * from MasterLocation where mLocationName=@mLocationName)
-- 	begin
-- 		select 'Location Already Exists!' as msg
-- 	end
-- 	else
-- 	begin
-- 		select @mLocationSerialNo= max(mLocationSerialNo) from MasterLocation where mLocationType=@mLocationType
-- 		if(@mLocationSerialNo is null)
-- 		set @mLocationSerialNo=1
-- 		else
-- 		set @mLocationSerialNo=@mLocationSerialNo+1
-- 		declare @ParentId int
-- 		if(@mLocationParentId=0)
-- 		set @ParentId=null
-- 		else
-- 		set @ParentId=@mLocationParentId

-- 		insert into MasterLocation( mLocationCode,mLocationName,mLocationPinCode,mLocationType,mLocationSerialNo,mLocationParentId,mLocationIsActive) values(@mLocationCode,@mLocationName,@mLocationPinCode,@mLocationType,@mLocationSerialNo,@ParentId,@mLocationIsActive)
-- 		select 'Location Inserted Successfully!' as msg
-- 	end


-- spMasterLocationGet
-- spMasterLocationDelete 20
-- --delete
-- alter proc dbo.spMasterLocationDelete(@mLocationId int)
-- as
-- if exists(select * from MasterLocation where mLocationId=@mLocationId)
--  begin 
-- 	delete from MasterLocation where mLocationId=@mLocationId
-- 	select 'Location Deleted Successfully!' as msg
--  end
-- else
--  begin
-- 	select 'Location Does not Exists!' as msg
--  end

-- spMasterLocationGet
-- spMasterLocationUpdate 21, 'AP', 'Andhra Pradesh', null, 'state', 0, 1
-- --update
-- alter proc dbo.spMasterLocationUpdate(@mLocationId int, @mLocationCode varchar(10),@mLocationName varchar(50),@mLocationPinCode int,@mLocationType varchar(20),@mLocationIsActive int)
-- as
-- if exists(select * from MasterLocation where mLocationName=@mLocationName and mLocationPinCode=@mLocationPinCode and mLocationId!=@mLocationId)
--  begin 
-- 	select 'Location Already Exists!' as msg
--  end
-- else
--  begin
-- 	update MasterLocation set mLocationCode=@mLocationCode,mLocationName=@mLocationName,mLocationPinCode=@mLocationPinCode,mLocationType=@mLocationType,mLocationIsActive=@mLocationIsActive where mLocationId=@mLocationId
-- 	select 'Location Updated Succesfully!' as msg
--  end




-- --alter table MasterStreams add foreign key (mStreamsParentId) references MasterStreams(mStreamsId)
-- --streams table
-- create table dbo.MasterStreams
-- (
-- 	mStreamsId int primary key identity,
-- 	mStreamsCode varchar(10),    --abbrivation like M.E , B.Tech, etc
-- 	mStreamsName varchar(50),    --name of streams, subStreams, Courses
-- 	mStreamsType varchar(20),	 
-- 	mStreamsSerialNo int,
-- 	mStreamsParentId int references MasterStreams(mStreamsId),	 --related to which either stream or subStream or Course
-- 	mStreamsIsActive int
-- )


-- --select
-- alter proc dbo.spMasterStreamsGet(@mStreamsId int = 0)
-- as 	
-- select mStreamsId,mStreamsCode,mStreamsName,mStreamsType,mStreamsSerialNo,isnull(mStreamsParentId,'') as mStreamsParentId ,mStreamsIsActive from MasterStreams where mStreamsId=@mStreamsId  or @mStreamsId=0;

 
-- --insert
-- alter proc dbo.spMasterStreamsInsert(@mStreamsCode varchar(10),@mStreamsName varchar(50),@mStreamsType varchar(20),@mStreamsParentId int,@mStreamsIsActive int
-- )
-- as
-- declare @mStreamsSerialNo int
-- 	if exists(select * from MasterStreams where mStreamsName=@mStreamsName)
-- 	begin 
-- 		select 'Stream Already Exists!' as msg
-- 	end
-- 	else
-- 	begin
-- 		select @mStreamsSerialNo=  max(mStreamsSerialNo) from MasterStreams where mStreamsType=@mStreamsType    
-- 		if(@mStreamsSerialNo is null)    
-- 		set @mStreamsSerialNo=1    
-- 		else     
-- 		set @mStreamsSerialNo=@mStreamsSerialNo+1  
		
-- 		declare @ParentId int
-- 		if(@mStreamsParentId=0)
-- 		set @ParentId=null
-- 		else
-- 		set @ParentId=@mStreamsParentId

-- 		insert into MasterStreams
-- 		(mStreamsCode,mStreamsName,mStreamsType,mStreamsSerialNo,mStreamsParentId,mStreamsIsActive) 
-- 		values
-- 		(@mStreamsCode,@mStreamsName,@mStreamsType,@mStreamsSerialNo,@ParentId,@mStreamsIsActive) 
-- 		select 'Stream Inserted Successfully!' as msg
-- 	end


-- --delete
-- alter proc dbo.spMasterStreamsDelete(@mStreamsId int)
-- as
-- if exists(select * from MasterStreams where mStreamsId=@mStreamsId )
--  begin
-- 	delete from MasterStreams where mStreamsId=@mStreamsId
-- 	select 'Stream Deleted Successfully!' as msg 
--  end
-- else
--  begin
-- 	select 'Stream Does not Exists!' as msg
--  end


-- --update
-- alter proc dbo.spMasterStreamsUpdate(@mStreamsId int,@mStreamsCode varchar(10),@mStreamsName varchar(50),@mStreamsType varchar(20),@mStreamsIsActive int)
-- as
-- if exists(select * from MasterStreams where mStreamsName=@mStreamsName and mStreamsId!=@mStreamsId )
--  begin 
-- 	select 'Stream Already Exists!' as msg
--  end
-- else
--  begin
-- 	update MasterStreams set mStreamsCode=@mStreamsCode,mStreamsName=@mStreamsName,mStreamsType=@mStreamsType,mStreamsIsActive=@mStreamsIsActive where mStreamsId=@mStreamsId
-- 	select 'Stream Updated Succesfully!' as msg
--  end

--  drop table MasterTypeDetails

-- --MasterType
-- create table dbo.MasterType
-- (
-- 	mTypeId int primary key identity,
-- 	mTypeSerialNo int,
-- 	mTypeName varchar(50),
-- 	mTypeProgramType varchar(50),			--FT,PT,Distance
-- 	mTypeTypeOfCollege varchar(50),			--private, public
-- 	mTypeCourseType varchar(50),            --degree, diploma , certification
-- 	mTypeIsActive int,
-- )


-- spMasterTypeGet 
-- --Select
-- alter proc dbo.spMasterTypeGet(@mTypeId int = 0)
-- as	
-- select mTypeId,isnull(mTypeSerialNo,'') as mTypeSerialNo,mTypeName,mTypeProgramType,mTypeTypeOfCollege,mTypeCourseType,mTypeIsActive from MasterType where mTypeId=@mTypeId or @mTypeId=0


-- --insert
-- alter proc dbo.spMasterTypeInsert(@mTypeSerialNo int,@mTypeName varchar(50),@mTypeProgramType varchar(50),	@mTypeTypeOfCollege varchar(50),@mTypeCourseType varchar(50),@mTypeIsActive int)
-- as
-- 	if exists(select * from MasterType where mTypeName=@mTypeName )
-- 	begin 
-- 		select 'Type Already Exists' as msg
-- 	end
-- 	else
-- 	begin
-- 		insert into MasterType(mTypeSerialNo,mTypeName,mTypeProgramType, mTypeTypeOfCollege,mTypeCourseType,mTypeIsActive) values(@mTypeSerialNo,@mTypeName,@mTypeProgramType, @mTypeTypeOfCollege,@mTypeCourseType,@mTypeIsActive)
-- 		select 'Type Has been Added Succesfully' as msg
-- 	end

							
-- spMasterTypeGet
-- --delete
-- create proc dbo.spMasterTypeDelete(@mTypeId int)
-- as
-- if exists(select * from MasterType where mTypeId=@mTypeId)
-- 	begin
-- 		delete from MasterType where mTypeId=@mTypeId
-- 		select 'Type Deleted Successfully!' as ms
-- 	end
-- else
-- 	begin
-- 		select 'Type Does Not Exist!' as ms
-- 	end



-- spMasterTypeGet
-- --update
-- create proc dbo.spMasterTypeUpdate(@mTypeId int,@mTypeSerialNo int,@mTypeName varchar(50),@mTypeProgramType varchar(50),	@mTypeTypeOfCollege varchar(50),@mTypeCourseType varchar(50),@mTypeIsActive int)

-- as
-- if exists(select * from MasterType where mTypeName=@mTypeName and mTypeId!=@mTypeId)
--  begin 
-- 	select 'Type Already Exists!' as msg
--  end
-- else
--  begin
-- 	update MasterType set mTypeSerialNo=@mTypeSerialNo,mTypeName=@mTypeName,mTypeProgramType=@mTypeProgramType, mTypeTypeOfCollege=@mTypeTypeOfCollege,mTypeCourseType=@mTypeCourseType,mTypeIsActive=@mTypeIsActive 
-- 	where mTypeId=@mTypeId
-- 	select 'Type Updated Succesfully!' as msg
--  end

	
-- --MasterTypeDetails Table
-- create table dbo.MasterTypeDetails
-- (
-- 	mtdId int primary key identity,
-- 	mtdSerialNo int,
-- 	mtdName varchar(50),
-- 	mtdParentId int references MasterType(mTypeId),			
-- 	mtdIsActive int,
-- )
 

-- --select
-- alter proc dbo.spMasterTypeDetailsGet(@mtdId int=0)
-- as
-- select mtdId,mtdSerialNo,mtdName,isnull(mtdParentId,'') as mtdParentId,mtdIsActive from MasterTypeDetails where mtdId=@mtdId or @mtdId=0 


-- spMasterTypeDetailsInsert 5,'yhjk',0,1
-- --insert
-- alter proc dbo.spMasterTypeDetailsInsert(@mtdSerialNo int,@mtdName varchar(50),@mtdParentId int,@mtdIsActive int)
-- as
-- if exists(select * from MasterTypeDetails where mtdName=@mtdName)
-- begin
-- 	select 'Already Exists!' as msg
-- end
-- else
-- begin
-- 	declare @ParentId int
-- 	if(@mtdParentId=0)
-- 	set @ParentId=null
-- 	else
-- 	set @ParentId=@mtdParentId
-- 	insert into MasterTypeDetails(mtdSerialNo,mtdName,mtdParentId,mtdIsActive) values(@mtdSerialNo,@mtdName,@ParentId,@mtdIsActive) 
-- 	select 'Inserted Successfully!' as msg
-- end


-- --delete
-- create proc dbo.spMasterTypeDetailsDelete(@mtdId int)
-- as
-- if exists(select * from MasterTypeDetails where mtdId=@mtdId)
-- begin
-- 	delete from MasterTypeDetails where mtdId=@mtdId
-- 	select 'Deleted Successfully!' as msg
-- end
-- else
-- begin
-- 	select 'Does Not Exists!' as msg
-- end


-- --update
-- create proc dbo.spMasterTypeDetailsUpdate(@mtdId int,@mtdName varchar(50),@mtdIsActive int)
-- as
-- if exists(select * from MasterTypeDetails where mtdName=@mtdName and @mtdId!=@mtdId)
-- begin 
-- 	select 'Data Already Exists!' as msg
-- end
-- else
-- begin
-- 	update MasterTypeDetails set mtdName=@mtdName,mtdIsActive=@mtdIsActive 
-- 	where mtdId=@mtdId
-- select 'Updated Successfully!' as msg 
-- end



-- -- Master Location Dropdown Get By Type
-- ALTER PROC dbo.spMasterLocationTypeGet(@mLocationType VARCHAR(50))
-- AS
-- select 
--  mLocationId,mLocationCode,mLocationName,isnull(mLocationPinCode,'') as mLocationPinCode,mLocationType,mLocationSerialNo, isnull(mLocationParentId,'') as	mLocationParentId,mLocationIsActive  from MasterLocation where mLocationType=@mLocationType;

-- spMasterLocationTypeGet 'city'
-- spMasterLocationTypeGet1 1
-- CREATE PROC dbo.spMasterLocationTypeGet1(@mLocationParentId int)
-- AS
-- select 
--  mLocationId,mLocationCode,mLocationName,isnull(mLocationPinCode,'') as mLocationPinCode,mLocationType,mLocationSerialNo, isnull(mLocationParentId,'') as	mLocationParentId,mLocationIsActive  from MasterLocation where mLocationParentId=@mLocationParentId

 
--  select * from sys.procedures

--  alter PROC dbo.spMasterLocationTypeGet(@mLocationType VARCHAR(50),@isactive int=-1)
-- AS
-- select 
--  mLocationId,mLocationCode,mLocationName,isnull(mLocationPinCode,'') as mLocationPinCode,mLocationType,mLocationSerialNo, isnull(mLocationParentId,'') as	mLocationParentId,mLocationIsActive  from MasterLocation where mLocationType=@mLocationType and ( @isactive=-1 or mLocationIsActive=@isactive)
 
--  spMasterLocationTypeGet 'country',1


 
-- -- Master Stream Dropdown Get By Type
-- CREATE PROC dbo.spMasterStreamsTypeGet(@mStreamsType VARCHAR(50))
-- AS
--  select mStreamsId,mStreamsCode,mStreamsName,mStreamsType,mStreamsSerialNo,isnull(mStreamsParentId,'') as mStreamsParentId ,mStreamsIsActive from MasterStreams where mStreamsType=@mStreamsType;

-- spMasterStreamsTypeGet 'city'

-- spMasterStreamsTypeGet1 1

-- CREATE PROC dbo.spMasterStreamsTypeGet1(@mStreamsParentId int)
-- AS
-- select mStreamsId,mStreamsCode,mStreamsName,mStreamsType,mStreamsSerialNo,isnull(mStreamsParentId,'') as mStreamsParentId ,mStreamsIsActive from MasterStreams where mStreamsId=@mStreamsId;

 
--  select * from sys.procedures

--  CREATE PROC dbo.spMasterStreamsTypeGet(@mStreamsType VARCHAR(50),@isactive int=-1)
-- AS
--  select mStreamsId,mStreamsCode,mStreamsName,mStreamsType,mStreamsSerialNo,isnull(mStreamsParentId,'') as mStreamsParentId ,mStreamsIsActive from MasterStreams where mStreamsType=@mStreamsType; and ( @isactive=-1 or mStreamsIsActive=@isactive)
 

-- ALTER PROCEDURE dbo.[spMasterCodeJoin]( @mbId int = 0)
-- AS SELECT 
-- MasterBank.mbId as mbId, 
-- MasterBank.mbCodeId as mbCodeId, 
-- MasterBank.mbBankId as mbBankId, 
-- MasterBank.mbAccountNo as mbAccountNo, 
-- MasterBank.mbIFSCCode as mbIFSCCode, 
-- MasterBank.mbIsActive as mbIsActive, 
-- MasterCode.mCodeId as mCodeId,
-- MasterCode.mCodeSrNo as mCodeId,
-- MasterCode.mCodeId as mCodeId,
-- MasterCode.mCodeParentId as mCodeParentId,
-- MasterCode.mCodeCreateDate as mCodeCreateDate,
-- MasterCode.mCodeActiveDate as mCodeActiveDate,
-- MasterCode.mCodeEmployeeId as mCodeEmployeeId
-- FROM MasterBank INNER JOIN  MasterCode on MasterBank.mbId=MasterCode.mCodeId where mbId=@mbId or @mbId = 0
-- spMasterCodeJoin

sp_help MasterTypeDetails
CREATE proc dbo.spMasterTypeDetailsInsert(@mtdSerialNo int,@mtdName varchar(50),@mtdParentId int,@mtdIsActive int)
as
if exists(select * from MasterTypeDetails where mtdName=@mtdName)
begin
	select 'Already Exists!' as msg
end
else
begin
	insert into MasterTypeDetails(mtdSerialNo,mtdName,mtdParentId,mtdIsActive) values(@mtdSerialNo,@mtdName,case when @mtdParentId=0 then null else @mtdParentId end,@mtdIsActive) 
	select 'Inserted Successfully!' as msg
end
