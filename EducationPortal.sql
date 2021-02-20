use dbEdushalacollege;


--MasterLocation
create table dbo.MasterLocation
(
	mLocationId int primary key identity,
	mLocationCode varchar(10),
	mLocationName varchar(50),
	mLocationPinCode int,
	mLocationType varchar(20),
	mLocationSerialNo int,
	mLocationParentId int references MasterLocation(mLocationId),
	mLocationIsActive int,
)

spMasterTypeDetailsGet
--select
alter proc dbo.spMasterLocationGet(@mLocationId int = 0)
as 	
select mLocationId,mLocationCode,mLocationName,isnull(mLocationPinCode,'') as mLocationPinCode,mLocationType,mLocationSerialNo, isnull(mLocationParentId,'') as	mLocationParentId,mLocationIsActive from MasterLocation where mLocationId=@mLocationId or @mLocationId=0;
 
sp_helptext spMasterLocationInsert
--sp_helptext spMasterLocationInsert


spMasterLocationGet 
spMasterLocationInsert 'MP', 'Madhya Pradesh', 0, 'state', 0, 1 
--insert
alter proc dbo.spMasterLocationInsert(@mLocationCode varchar(10),@mLocationName varchar(50),@mLocationPinCode int,@mLocationType varchar(20),@mLocationParentId int,@mLocationIsActive int)
as
	declare @mLocationSerialNo int
	if exists(select * from MasterLocation where mLocationName=@mLocationName)
	begin
		select 'Location Already Exists!' as msg
	end
	else
	begin
		select @mLocationSerialNo= max(mLocationSerialNo) from MasterLocation where mLocationType=@mLocationType
		if(@mLocationSerialNo is null)
		set @mLocationSerialNo=1
		else
		set @mLocationSerialNo=@mLocationSerialNo+1
		declare @ParentId int
		if(@mLocationParentId=0)
		set @ParentId=null
		else
		set @ParentId=@mLocationParentId

		insert into MasterLocation( mLocationCode,mLocationName,mLocationPinCode,mLocationType,mLocationSerialNo,mLocationParentId,mLocationIsActive) values(@mLocationCode,@mLocationName,@mLocationPinCode,@mLocationType,@mLocationSerialNo,@ParentId,@mLocationIsActive)
		select 'Location Inserted Successfully!' as msg
	end


spMasterLocationGet
spMasterLocationDelete 20
--delete
alter proc dbo.spMasterLocationDelete(@mLocationId int)
as
if exists(select * from MasterLocation where mLocationId=@mLocationId)
 begin 
	delete from MasterLocation where mLocationId=@mLocationId
	select 'Location Deleted Successfully!' as msg
 end
else
 begin
	select 'Location Does not Exists!' as msg
 end

spMasterLocationGet
spMasterLocationUpdate 21, 'AP', 'Andhra Pradesh', null, 'state', 0, 1
--update
alter proc dbo.spMasterLocationUpdate(@mLocationId int, @mLocationCode varchar(10),@mLocationName varchar(50),@mLocationPinCode int,@mLocationType varchar(20),@mLocationIsActive int)
as
if exists(select * from MasterLocation where mLocationName=@mLocationName and mLocationPinCode=@mLocationPinCode and mLocationId!=@mLocationId)
 begin 
	select 'Location Already Exists!' as msg
 end
else
 begin
	update MasterLocation set mLocationCode=@mLocationCode,mLocationName=@mLocationName,mLocationPinCode=@mLocationPinCode,mLocationType=@mLocationType,mLocationIsActive=@mLocationIsActive where mLocationId=@mLocationId
	select 'Location Updated Succesfully!' as msg
 end




--alter table MasterStreams add foreign key (mStreamsParentId) references MasterStreams(mStreamsId)
--streams table
create table dbo.MasterStreams
(
	mStreamsId int primary key identity,
	mStreamsCode varchar(10),    --abbrivation like M.E , B.Tech, etc
	mStreamsName varchar(50),    --name of streams, subStreams, Courses
	mStreamsType varchar(20),	 
	mStreamsSerialNo int,
	mStreamsParentId int references MasterStreams(mStreamsId),	 --related to which either stream or subStream or Course
	mStreamsIsActive int
)


--select
alter proc dbo.spMasterStreamsGet(@mStreamsId int = 0)
as 	
select mStreamsId,mStreamsCode,mStreamsName,mStreamsType,mStreamsSerialNo,isnull(mStreamsParentId,'') as mStreamsParentId ,mStreamsIsActive from MasterStreams where mStreamsId=@mStreamsId  or @mStreamsId=0;

 
--insert
alter proc dbo.spMasterStreamsInsert(@mStreamsCode varchar(10),@mStreamsName varchar(50),@mStreamsType varchar(20),@mStreamsParentId int,@mStreamsIsActive int
)
as
declare @mStreamsSerialNo int
	if exists(select * from MasterStreams where mStreamsName=@mStreamsName)
	begin 
		select 'Stream Already Exists!' as msg
	end
	else
	begin
		select @mStreamsSerialNo=  max(mStreamsSerialNo) from MasterStreams where mStreamsType=@mStreamsType    
		if(@mStreamsSerialNo is null)    
		set @mStreamsSerialNo=1    
		else     
		set @mStreamsSerialNo=@mStreamsSerialNo+1  
		
		declare @ParentId int
		if(@mStreamsParentId=0)
		set @ParentId=null
		else
		set @ParentId=@mStreamsParentId

		insert into MasterStreams
		(mStreamsCode,mStreamsName,mStreamsType,mStreamsSerialNo,mStreamsParentId,mStreamsIsActive) 
		values
		(@mStreamsCode,@mStreamsName,@mStreamsType,@mStreamsSerialNo,@ParentId,@mStreamsIsActive) 
		select 'Stream Inserted Successfully!' as msg
	end


--delete
alter proc dbo.spMasterStreamsDelete(@mStreamsId int)
as
if exists(select * from MasterStreams where mStreamsId=@mStreamsId )
 begin
	delete from MasterStreams where mStreamsId=@mStreamsId
	select 'Stream Deleted Successfully!' as msg 
 end
else
 begin
	select 'Stream Does not Exists!' as msg
 end


--update
alter proc dbo.spMasterStreamsUpdate(@mStreamsId int,@mStreamsCode varchar(10),@mStreamsName varchar(50),@mStreamsType varchar(20),@mStreamsIsActive int)
as
if exists(select * from MasterStreams where mStreamsName=@mStreamsName and mStreamsId!=@mStreamsId )
 begin 
	select 'Stream Already Exists!' as msg
 end
else
 begin
	update MasterStreams set mStreamsCode=@mStreamsCode,mStreamsName=@mStreamsName,mStreamsType=@mStreamsType,mStreamsIsActive=@mStreamsIsActive where mStreamsId=@mStreamsId
	select 'Stream Updated Succesfully!' as msg
 end

 drop table MasterTypeDetails

--MasterType
create table dbo.MasterType
(
	mTypeId int primary key identity,
	mTypeSerialNo int,
	mTypeName varchar(50),
	mTypeProgramType varchar(50),			--FT,PT,Distance
	mTypeTypeOfCollege varchar(50),			--private, public
	mTypeCourseType varchar(50),            --degree, diploma , certification
	mTypeIsActive int,
)


spMasterTypeGet 
--Select
alter proc dbo.spMasterTypeGet(@mTypeId int = 0)
as	
select mTypeId,isnull(mTypeSerialNo,'') as mTypeSerialNo,mTypeName,mTypeProgramType,mTypeTypeOfCollege,mTypeCourseType,mTypeIsActive from MasterType where mTypeId=@mTypeId or @mTypeId=0


--insert
alter proc dbo.spMasterTypeInsert(@mTypeSerialNo int,@mTypeName varchar(50),@mTypeProgramType varchar(50),	@mTypeTypeOfCollege varchar(50),@mTypeCourseType varchar(50),@mTypeIsActive int)
as
	if exists(select * from MasterType where mTypeName=@mTypeName )
	begin 
		select 'Type Already Exists' as msg
	end
	else
	begin
		insert into MasterType(mTypeSerialNo,mTypeName,mTypeProgramType, mTypeTypeOfCollege,mTypeCourseType,mTypeIsActive) values(@mTypeSerialNo,@mTypeName,@mTypeProgramType, @mTypeTypeOfCollege,@mTypeCourseType,@mTypeIsActive)
		select 'Type Has been Added Succesfully' as msg
	end

							
spMasterTypeGet
--delete
create proc dbo.spMasterTypeDelete(@mTypeId int)
as
if exists(select * from MasterType where mTypeId=@mTypeId)
	begin
		delete from MasterType where mTypeId=@mTypeId
		select 'Type Deleted Successfully!' as ms
	end
else
	begin
		select 'Type Does Not Exist!' as ms
	end




--update
create proc dbo.spMasterTypeUpdate(@mTypeId int,@mTypeSerialNo int,@mTypeName varchar(50),@mTypeProgramType varchar(50),	@mTypeTypeOfCollege varchar(50),@mTypeCourseType varchar(50),@mTypeIsActive int)
as
if exists(select * from MasterType where mTypeName=@mTypeName and mTypeId!=@mTypeId)
 begin 
	select 'Type Already Exists!' as msg
 end
else
 begin
	update MasterType set mTypeSerialNo=@mTypeSerialNo,mTypeName=@mTypeName,mTypeProgramType=@mTypeProgramType, mTypeTypeOfCollege=@mTypeTypeOfCollege,mTypeCourseType=@mTypeCourseType,mTypeIsActive=@mTypeIsActive 
	where mTypeId=@mTypeId
	select 'Type Updated Succesfully!' as msg
 end

	
--MasterTypeDetails Table
create table dbo.MasterTypeDetails
(
	mtdId int primary key identity,
	mtdSerialNo int,
	mtdName varchar(50),
	mtdParentId int references MasterType(mTypeId),			
	mtdIsActive int,
)
 

--select
alter proc dbo.spMasterTypeDetailsGet(@mtdId int=0)
as
select mtdId,mtdSerialNo,mtdName,isnull(mtdParentId,'') as mtdParentId,mtdIsActive from MasterTypeDetails where mtdId=@mtdId or @mtdId=0 


spMasterTypeDetailsInsert 5,'yhjk',0,1
--insert
alter proc dbo.spMasterTypeDetailsInsert(@mtdSerialNo int,@mtdName varchar(50),@mtdParentId int,@mtdIsActive int)
as
if exists(select * from MasterTypeDetails where mtdName=@mtdName)
begin
	select 'Already Exists!' as msg
end
else
begin
	declare @ParentId int
	if(@mtdParentId=0)
	set @ParentId=null
	else
	set @ParentId=@mtdParentId
	insert into MasterTypeDetails(mtdSerialNo,mtdName,mtdParentId,mtdIsActive) values(@mtdSerialNo,@mtdName,@ParentId,@mtdIsActive) 
	select 'Inserted Successfully!' as msg
end


--delete
create proc dbo.spMasterTypeDetailsDelete(@mtdId int)
as
if exists(select * from MasterTypeDetails where mtdId=@mtdId)
begin
	delete from MasterTypeDetails where mtdId=@mtdId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end


--update
create proc dbo.spMasterTypeDetailsUpdate(@mtdId int,@mtdName varchar(50),@mtdIsActive int)
as
if exists(select * from MasterTypeDetails where mtdName=@mtdName and @mtdId!=@mtdId)
begin 
	select 'Data Already Exists!' as msg
end
else
begin
	update MasterTypeDetails set mtdName=@mtdName,mtdIsActive=@mtdIsActive 
	where mtdId=@mtdId
select 'Updated Successfully!' as msg 
end





----------------------------
--MasterBankSetup table
----------------------------
create table MasterBankSetup
(
	mbsId int identity primary key, 
	mbsName varchar(200), 
	mbsIsActive int
)

--select
create proc dbo.spMasterBankSetupGet(@mbsId int=0)
as
select mbsId,mbsName,mbsIsActive from MasterBankSetup where mbsId=@mbsId or @mbsId=0 

--insert
alter proc dbo.spMasterBankSetupInsert(@mbsName varchar(200),@mbsIsActive int)
as
if exists(select * from MasterBankSetup where mbsName=@mbsName)
begin
	select 'Already Exists!' as msg
end
else
begin
	insert into MasterBankSetup(mbsName,mbsIsActive) values(@mbsName,@mbsIsActive) 
	select 'Inserted Successfully!' as msg
end

--delete
create proc dbo.spMasterBankSetupDelete(@mbsId int)
as
if exists(select * from MasterBankSetup where mbsId=@mbsId)
begin
	delete from MasterBankSetup where mbsId=@mbsId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end

--update
create proc dbo.spMasterBankSetupUpdate(@mbsId int,@mbsName varchar(200),@mbsIsActive int)
as
if exists(select * from MasterBankSetup where mbsName=@mbsName and mbsId!=@mbsId)
begin 
	select 'Data Already Exists!' as msg
end
else
begin
	update MasterBankSetup set mbsName=@mbsName,mbsIsActive=@mbsIsActive 
	where mbsId=@mbsId
select 'Updated Successfully!' as msg 
end






----------------------------
--MasterUserType table
----------------------------
create table MasterUserType
(
	mutId int identity primary key,
	mutName varchar(50),
	mutIsActive int
)

--select
create proc dbo.spMasterUserTypeGet(@mutId int=0)
as
select mutId,mutName,mutIsActive from MasterUserType where mutId=@mutId or @mutId=0 

--insert
create proc dbo.spMasterUserTypeInsert(@mutName varchar(200),@mutIsActive int)
as
if exists(select * from MasterUserType where mutName=@mutName)
begin
	select 'Already Exists!' as msg
end
else
begin
	insert into MasterUserType(mutName,mutIsActive) values(@mutName,@mutIsActive) 
	select 'Inserted Successfully!' as msg
end

--delete
create proc dbo.spMasterUserTypeDelete(@mutId int)
as
if exists(select * from MasterUserType where mutId=@mutId)
begin
	delete from MasterUserType where mutId=@mutId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end

--update
create proc dbo.spMasterUserTypeUpdate(@mutId int,@mutName varchar(200),@mutIsActive int)
as
if exists(select * from MasterUserType where mutName=@mutName and mutId!=@mutId)
begin 
	select 'Data Already Exists!' as msg
end
else
begin
	update MasterUserType set mutName=@mutName,mutIsActive=@mutIsActive 
	where mutId=@mutId
select 'Updated Successfully!' as msg 
end





----------------------------
--MasterUserDesignation table
----------------------------
create table MasterUserDesignation
(
	mudId int identity primary key,
	mudName varchar(50),
	mudIsActive int
)

--select
create proc dbo.spMasterUserDesignationGet(@mudId int=0)
as
select mudId,mudName,mudIsActive from MasterUserDesignation where mudId=@mudId or @mudId=0 

--insert
create proc dbo.spMasterUserDesignationInsert(@mudName varchar(200),@mudIsActive int)
as
if exists(select * from MasterUserDesignation where mudName=@mudName)
begin
	select 'Already Exists!' as msg
end
else
begin
	insert into MasterUserDesignation(mudName,mudIsActive) values(@mudName,@mudIsActive) 
	select 'Inserted Successfully!' as msg
end

--delete
create proc dbo.spMasterUserDesignationDelete(@mudId int)
as
if exists(select * from MasterUserDesignation where mudId=@mudId)
begin
	delete from MasterUserDesignation where mudId=@mudId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end

--update
create proc dbo.spMasterUserDesignationUpdate(@mudId int,@mudName varchar(200),@mudIsActive int)
as
if exists(select * from MasterUserDesignation where mudName=@mudName and mudId!=@mudId)
begin 
	select 'Data Already Exists!' as msg
end
else
begin
	update MasterUserDesignation set mudName=@mudName,mudIsActive=@mudIsActive 
	where mudId=@mudId
select 'Updated Successfully!' as msg 
end





----------------------------
--MasterCode table
----------------------------
CREATE TABLE MasterCode
(
  mCodeId int primary key identity,
  mCodeSrNo int,
  mCode varchar(255),
  mCodeParentId int references MasterCode(mCodeId),
  mCodeCreateDate date,
  mCodeActiveDate date,
  mCodeType int references MasterUserType(mutId),
  mCodeEmployeeId int,
)


--select
create proc dbo.spMasterCodeGet(@mCodeId int=0)
as
select mCodeId,mCodeSrNo,mCode,mCodeParentId,mCodeCreateDate,mCodeActiveDate,mCodeType,mCodeEmployeeId from MasterCode where mCodeId=@mCodeId or @mCodeId=0 

--insert
alter proc dbo.spMasterCodeInsert(@mCodeSrNo int,@mCode varchar(255),@mCodeParentId int, @mCodeCreateDate date, @mCodeActiveDate date,@mCodeType int,@mCodeEmployeeId int)
as
--if exists(select * from MasterCode where mCodeId=@mCodeId)
--begin
--	select 'Already Exists!' as msg
--end
--else
--begin
	declare @ParentId int
	if(@mCodeParentId=0)
	set @ParentId=null
	else
	set @ParentId=@mCodeParentId
	insert into MasterCode(mCodeSrNo,mCode,mCodeParentId,mCodeCreateDate,mCodeActiveDate,mCodeType,mCodeEmployeeId) 
	values(@mCodeSrNo,@mCode,@ParentId,@mCodeCreateDate,@mCodeActiveDate,@mCodeType,@mCodeEmployeeId) 
	select 'Inserted Successfully!' as msg
--end


--delete
create proc dbo.spMasterCodeDelete(@mCodeId int)
as
if exists(select * from MasterCode where mCodeId=@mCodeId)
begin
	delete from MasterCode where mCodeId=@mCodeId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exist!' as msg
end
spMasterCodeUpdate 5,3,'JDI546ddd',0,'3-25-1954','5-30-2200',1,782
--update
alter proc dbo.spMasterCodeUpdate(@mCodeId int,@mCodeSrNo int,@mCode varchar(255),@mCodeParentId int, @mCodeCreateDate date, @mCodeActiveDate date,@mCodeType int,@mCodeEmployeeId int)
as
--if exists(select * from MasterCode where mCodeId=@mCodeId and mCodeId!=@mCodeId)
--begin 
--	select 'Data Already Exist!' as msg
--end
--else
--begin
	declare @ParentId int
	if(@mCodeParentId=0)
	set @ParentId=null
	else
	set @ParentId=@mCodeParentId
	update MasterCode set 
	mCodeSrNo=@mCodeSrNo,
	mCode=@mCode,
	mCodeParentId=@ParentId,
	mCodeCreateDate=@mCodeCreateDate,
	mCodeActiveDate=@mCodeActiveDate,
	mCodeType=@mCodeType,
	mCodeEmployeeId=@mCodeEmployeeId 
	where mCodeId=@mCodeId
	select 'Updated Successfully!' as msg 
--end





-------------------------------
--MasterProfile table
-------------------------------
CREATE TABLE MasterProfile
(
  mpId int primary key identity,
  mpCodeId int references MasterCode(mCodeId),
  mpFirstName varchar(255),
  mpLastName varchar(255),
  mpMobileNo bigint,
  mpAlternateMobileNo bigint,
  mpEmailId varchar(255),
  mpAddress1 varchar(500),
  mpAddress2 varchar(500),
  mpPinCode int,
  mpImage varchar(500),
  mpIsActive int
)

--select
alter proc dbo.spMasterProfileGet(@mpId int=0)
as
select mpId,mpCodeId, mpFirstName,mpLastName,mpMobileNo,mpAlternateMobileNo,mpEmailId,mpAddress1,mpAddress2,mpPinCode,mpImage,mpIsActive 
 from MasterProfile where mpId=@mpId or @mpId=0 

--insert
alter proc dbo.spMasterProfileInsert(@mpCodeId int,@mpFirstName varchar(255),@mpLastName varchar(255),@mpMobileNo bigint,@mpAlternateMobileNo bigint,@mpEmailId varchar(255),@mpAddress1 varchar(500),@mpAddress2 varchar(500),@mpPinCode int,@mpImage varchar(500),@mpIsActive int)
as
if exists(select * from MasterProfile where mpMobileNo=@mpMobileNo)
begin
	select 'Mobile Number Already Exists!' as msg
end
else
begin
	declare @CodeId int
	if(@mpCodeId=0)
	set @mpCodeId=null
	else
	set @CodeId=@mpCodeId
	insert into MasterProfile(mpCodeId,mpFirstName,mpLastName,mpMobileNo,mpAlternateMobileNo,mpEmailId,mpAddress1,mpAddress2,mpPinCode,mpImage,mpIsActive) 
	values(@CodeId,@mpFirstName,@mpLastName,@mpMobileNo,@mpAlternateMobileNo,@mpEmailId,@mpAddress1,@mpAddress2,@mpPinCode,@mpImage,
	@mpIsActive) 
	select 'Inserted Successfully!' as msg
end

--delete
create proc dbo.spMasterProfileDelete(@mpId int)
as
if exists(select * from MasterProfile where mpId=@mpId)
begin
	delete from MasterProfile where mpId=@mpId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exist!' as msg
end

--update
alter proc dbo.spMasterProfileUpdate(@mpId int,@mpCodeId int,@mpFirstName varchar(255),@mpLastName varchar(255),@mpMobileNo bigint,@mpAlternateMobileNo bigint,@mpEmailId varchar(255),@mpAddress1 varchar(500),@mpAddress2 varchar(500),@mpPinCode int,@mpImage varchar(500),@mpIsActive int)
as
if exists(select * from MasterProfile where mpMobileNo=@mpMobileNo and mpId!=@mpId)
begin 
	select 'Data Already Exist!' as msg
end
else
begin
	declare @CodeId int
	if(@mpCodeId=0)
	set @mpCodeId=null
	else
	set @CodeId=@mpCodeId
	update MasterProfile set
	mpCodeId=@CodeId,
	mpFirstName=@mpFirstName,
	mpLastName=@mpLastName,
	mpMobileNo=@mpMobileNo,
	mpAlternateMobileNo=@mpAlternateMobileNo,
	mpEmailId=@mpEmailId,
	mpAddress1=@mpAddress1,
	mpAddress2=@mpAddress2,
	mpPinCode=@mpPinCode,
	mpImage=@mpImage,
	mpIsActive=@mpIsActive
	where mpId=@mpId
	select 'Updated Successfully!' as msg 
end





-------------------------------
--MasterBank table
-------------------------------
CREATE TABLE MasterBank
(
  mbId int primary key identity,
  mbCodeId int references MasterCode(mCodeId),
  mbBankId int references MasterBankSetup(mbsId),
  mbAccountNo varchar(255),
  mbIFSCCode varchar(20),
  mbIsActive int
)

--select
create proc dbo.spMasterBankGet(@mbId int=0)
as
select mbId,mbCodeId,mbBankId,mbAccountNo,mbIFSCCode,mbIsActive from MasterBank where mbId=@mbId or @mbId=0 


--insert
alter proc dbo.spMasterBankInsert(@mbCodeId int,@mbBankId int ,@mbAccountNo varchar(255),@mbIFSCCode varchar(20),
	@mbIsActive int)
as
if exists(select * from MasterBank where mbAccountNo=@mbAccountNo)
begin
	select 'Account Number Already Exists!' as msg
end
else
begin
	declare @CodeId int
	if(@mbCodeId=0)
	set @mbCodeId=null
	else
	set @CodeId=@mbCodeId
	insert into MasterBank(mbCodeId,mbBankId,mbAccountNo,mbIFSCCode,mbIsActive) 
	values(@CodeId,@mbBankId,@mbAccountNo,@mbIFSCCode,@mbIsActive) 
	select 'Inserted Successfully!' as msg
end

spMasterBankDelete 4
--delete
create proc dbo.spMasterBankDelete(@mbId int)
as
if exists(select * from MasterBank where mbId=@mbId)
begin
	delete from MasterBank where mbId=@mbId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exist!' as msg
end

--update
alter proc dbo.spMasterBankUpdate(@mbId int,@mbCodeId int,@mbBankId int ,@mbAccountNo varchar(255),@mbIFSCCode varchar(20),
	@mbIsActive int)
as
if exists(select * from MasterBank where mbAccountNo=@mbAccountNo)
begin 
	select 'Data Already Exists!' as msg
end
else
begin
	declare @CodeId int
	if(@mbCodeId=0)
	set @mbCodeId=null
	else
	set @CodeId=@mbCodeId
	update MasterBank set 
	mbCodeId=@CodeId,
	mbBankId=@mbBankId,
	mbAccountNo=@mbAccountNo,
	mbIFSCCode=@mbIFSCCode,
	mbIsActive=@mbIsActive
	where mbId=@mbId
	select 'Updated Successfully!' as msg 
end





-------------------------------
--MasterLogin table
-------------------------------
Create Table MasterLogin
(
  mlId int primary key identity,
  mlCodeId int references MasterCode(mCodeId),
  mlLoginName varchar(255),
  mlLoginPassword varchar(255),
  mlLoginType int references MasterUserType(mutId),
  mlRoles varchar(255),
  mlTokens varchar(555),
  mlPermission varchar(255),
  mlIsActive int
)


--select
alter proc dbo.spMasterLoginGet(@mlId int=0)
as
select mlId,mlCodeId,mlLoginName,mlLoginPassword,mlLoginType,mlRoles,mlTokens,mlPermission,mlIsActive
 from MasterLogin where mlId=@mlId or @mlId=0 

--insert
alter proc dbo.spMasterLoginInsert(@mlCodeId int,@mlLoginName varchar(255),@mlLoginPassword varchar(255),@mlLoginType int,@mlRoles varchar(255),@mlTokens varchar(555),@mlPermission varchar(255),@mlIsActive int)
as
if exists(select * from MasterLogin where mlLoginName=@mlLoginName)
begin
	select 'Login Name Already Exists!' as msg
end
else
begin
	declare @CodeId int
	if(@mlCodeId=0)
	set @mlCodeId=null
	else
	set @CodeId=@mlCodeId
	insert into MasterLogin(mlCodeId,mlLoginName,mlLoginPassword,mlLoginType,mlRoles,mlTokens,mlPermission,mlIsActive) 
	values(@CodeId,@mlLoginName,@mlLoginPassword,@mlLoginType,@mlRoles,@mlTokens,@mlPermission,@mlIsActive) 
	select 'Inserted Successfully!' as msg
end


--delete
create proc dbo.spMasterLoginDelete(@mlId int)
as
if exists(select * from MasterLogin where mlId=@mlId)
begin
	delete from MasterLogin where mlId=@mlId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exist!' as msg
end

--update
alter proc dbo.spMasterLoginUpdate(@mlId int,@mlCodeId int,@mlLoginName varchar(255),@mlLoginPassword varchar(255),@mlLoginType int,@mlRoles varchar(255),@mlTokens varchar(555),@mlPermission varchar(255),@mlIsActive int)
as
if exists(select * from MasterLogin where mlLoginName=@mlLoginName and mlId!=@mlId)
begin 
	select 'Data Does not Exist!' as msg
end
else
begin
	declare @CodeId int
	if(@mlCodeId=0)
	set @mlCodeId=null
	else
	set @CodeId=@mlCodeId
	update MasterLogin set
	mlCodeId=@CodeId,
	mlLoginName=@mlLoginName,
	mlLoginPassword=@mlLoginPassword,
	mlLoginType=@mlLoginType,
	mlRoles=@mlRoles,
	mlTokens=@mlTokens,
	mlPermission=@mlPermission,
	mlIsActive=@mlIsActive
	where mlId=@mlId
	select 'Updated Successfully!' as msg 
end





-------------------------------
--UrlType table
-------------------------------
Create table UrlType
(
	utId int identity primary key, 
	utName varchar(200)
)

--select
create proc dbo.spUrlTypeGet(@utId int=0)
as
select utId,utName from UrlType where utId=@utId or @utId=0 

--insert
create proc dbo.spUrlTypeInsert(@utName varchar(200))
as
if exists(select * from UrlType where utName=@utName)
begin
	select 'Already Exists!' as msg
end
else
begin
	insert into UrlType(utName) values(@utName) 
	select 'Inserted Successfully!' as msg
end

--delete
create proc dbo.spUrlTypeDelete(@utId int)
as
if exists(select * from UrlType where utId=@utId)
begin
	delete from UrlType where utId=@utId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end

--update
create proc dbo.spUrlTypeUpdate(@utId int,@utName varchar(200))
as
if exists(select * from UrlType where utName=@utName and @utId!=@utId)
begin 
	select 'Data Already Exists!' as msg
end
else
begin
	update UrlType set utName=@utName
	where utId=@utId
select 'Updated Successfully!' as msg 
end





-------------------------------
--UrlGroup table
-------------------------------
Create table UrlGroup
(
	ugId int identity primary key, 
	ugName varchar(200), 
	ugTypeId int references urlType(utId)
)


--select
create proc dbo.spUrlGroupGet(@ugId int=0)
as
select ugId,ugName,ugTypeId from UrlGroup where ugId=@ugId or @ugId=0 

--insert
create proc dbo.spUrlGroupInsert(@ugName varchar(200), @ugTypeId int)
as
if exists(select * from UrlGroup where ugName=@ugName)
begin
	select 'Already Exists!' as msg
end
else
begin
	insert into UrlGroup(ugName,ugTypeId) values(@ugName,@ugTypeId) 
	select 'Inserted Successfully!' as msg
end

--delete
create proc dbo.spUrlGroupDelete(@ugId int)
as
if exists(select * from UrlGroup where ugId=@ugId)
begin
	delete from UrlGroup where ugId=@ugId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end

--update
create proc dbo.spUrlGroupUpdate(@ugId int,@ugName varchar(200), @ugTypeId int)
as
if exists(select * from UrlGroup where ugName=@ugName and @ugId!=@ugId)
begin 
	select 'Data Already Exists!' as msg
end
else
begin
	update UrlGroup set ugName=@ugName,ugTypeId=@ugTypeId 
	where ugId=@ugId
select 'Updated Successfully!' as msg 
end




-------------------------------
--UrlLink table
-------------------------------
create table UrlLink
(
	ulId int identity Primary key, 
	ulName varchar(200), 
	ulPath varchar(1000), 
	ulStatus int, 
	ulparentId int references urlLink(ulId),
	ulSrNo int, 
	ulIcon varchar(200), 
	ulTypeId int references urlType(utId),
	ulDate datetime 
)


--select
create proc dbo.spUrlLinkGet(@ulId int=0)
as
select ulName,ulPath,ulStatus,ulparentId,ulSrNo,ulIcon,ulTypeId,ulDate from UrlLink where ulId=@ulId or @ulId=0 

--insert
create proc dbo.spUrlLinkInsert(@ulName varchar(200), @ulPath varchar(1000), @ulStatus int, @ulparentId int,@ulSrNo int, @ulIcon varchar(200), @ulTypeId int, @ulDate date)
as
if exists(select * from UrlLink where ulPath=@ulPath)
begin
	select 'Already Exists!' as msg
end
else
begin
	insert into UrlLink(ulName,ulPath,ulStatus,ulparentId,ulSrNo,ulIcon,ulTypeId,ulDate) values(@ulName,@ulPath,@ulStatus,@ulparentId,@ulSrNo,@ulIcon,@ulTypeId,@ulDate) 
	select 'Inserted Successfully!' as msg
end

--delete
create proc dbo.spUrlLinkDelete(@ulId int)
as
if exists(select * from UrlGroup where ulId=@ulId)
begin
	delete from UrlLink where ulId=@ulId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end

--update
create proc dbo.spUrlLinkUpdate(@ulId int, @ulName varchar(200), @ulPath varchar(1000), @ulStatus int, @ulparentId int,@ulSrNo int, @ulIcon varchar(200), @ulTypeId int, @ulDate date)
as
if exists(select * from UrlLink where ulPath=@ulPath and ulId!=@ulId)
begin 
	select 'Data Already Exist!' as msg
end
else
begin
	update UrlLink set ulName=ulName,ulPath=@ulPath,ulStatus=@ulStatus,ulparentId=@ulparentId,ulSrNo=@ulSrNo,ulIcon=@ulIcon,
	  ulTypeId=@ulTypeId,ulDate=@ulDate 
	where ugId=@ugId
	select 'Updated Successfully!' as msg
end





alter schema dbo transfer dbNewProducts1.UrlPermission
-------------------------------
--UrlPermission table
-------------------------------
create table UrlPermission
(
	ulId int identity primary key, 
	ulLinkId int references urlLink(ulId), 
	ulGroupId int references (urlGroupId),
	ulIsActive int
)


--select
create proc dbo.spUrlPermissionGet(@ulId int=0)
as
select ulId,ulLinkId,ulGroupId,ulIsActive from UrlPermission where ulId=@ulId or @ulId=0 

--insert
create proc dbo.spUrlPermissionInsert(@ulLinkId int, @ulGroupId int, @ulIsActive int)
as
--if exists(select * from UrlPermission where ulGroupId=@ulGroupId)
--begin
--	select 'Already Exists!' as msg
--end
--else
--begin
	insert into UrlPermission(ulLinkId,ulGroupId,ulIsActive) values(@ulLinkId, @ulGroupId, @ulIsActive)
	select 'Inserted Successfully!' as msg
--end

--delete
create proc dbo.spUrlPermissionDelete(@ulId int)
as
if exists(select * from UrlPermission where ulId=@ulId)
begin
	delete from UrlPermission where ulId=@ulId
	select 'Deleted Successfully!' as msg
end
else
begin
	select 'Does Not Exists!' as msg
end

--update
create proc dbo.spUrlPermissionUpdate(@ulId int, @ulLinkId int, @ulGroupId int, @ulIsActive int)
as
--if exists(select * from UrlPermission where ulGroupId=@ulGroupId and @ugId!=@ugId)
--begin 
--	select 'Data Already Exists!' as msg
--end
--else
--begin
	update UrlPermission set ulLinkId=@ulLinkId, ulGroupId=@ulGroupId, ulIsActive=@ulIsActive 
	where ulId=@ulId
	select 'Updated Successfully!' as msg 
--end
