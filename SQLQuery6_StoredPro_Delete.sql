CREATE PROCEDURE dbo.DeleteUserone
    @Id INT
AS
BEGIN
    DELETE FROM dbo.Userone WHERE Id = @Id;
END;
