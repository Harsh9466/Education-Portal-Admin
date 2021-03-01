-- spMasterTypeDetailGet
-- sp_helptext spMasterTypeDetailInsert
-- exec spMasterTypeDetailInsert 1,'Engineering',null,1

-- select * from MasterTypeDetail
-- CREATE proc dbo.spMasterTypeDetailInsert(@mtdTypeId int,@mtdName varchar(50),@mtdParentId int,@mtdIsActive int)
-- as
-- if exists(select * from MasterTypeDetail where mtdName=@mtdName)
-- begin
-- 	select 'Already Exists!' as msg
-- end
-- else
-- begin
-- declare @mtdSerialNo int
-- 		select @mtdSerialNo= max(mtdSrNo) from MasterTypeDetail
-- 		if(@mtdSerialNo is null)
-- 		set @mtdSerialNo=1
-- 		else
-- 		set @mtdSerialNo=@mtdSerialNo+1
-- 	insert into MasterTypeDetail(mtdTypeId,mtdSrNo,mtdName,mtdParentId,mtdIsActive) values(@mtdTypeId,@mtdSerialNo,@mtdName,case when @mtdParentId=0 then null else @mtdParentId end,@mtdIsActive) 
-- 	select 'Inserted Successfully!' as msg
-- end

--
use dbEdushalacollege

exec spMasterTypeGet

exec spMasterTypeInsert 'Specialization',1

exec spMasterTypeDetailInsert 'HR',7,13,1

exec spMasterTypeDetailGet 5

exec spMasterTypeDetailUpdate 5,5,'gfcdd',null,2,1

exec spMasterTypeDetailDelete 10


spMasterTypeDetailGet

course--->Stream


select * from MasterTypeDetail

spMasterCourseStreamGet

sp_helptext spMasterCourseStreamInsert 

create proc dbo.spMasterCourseStreamInsert(@mcsCourseId int,@mcsStreamId int)
as
if exists (select * from MasterCourseStream where mcsCourseId=@mcsCourseId and mcsStreamId=@mcsStreamId)
begin 
	select 'Entered Data Already Exist!' as msg
end
else
begin
	insert MasterCourseStream(mcsCourseId,mcsStreamId) values(@mcsCourseId,@mcsStreamId)
	select 'Inserted Successfully!' as msg
end
	