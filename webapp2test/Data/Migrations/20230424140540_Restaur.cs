using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapp2test.Data.Migrations
{
    /// <inheritdoc />
    public partial class Restaur : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_restuarant",
                table: "restuarant");

            migrationBuilder.RenameTable(
                name: "restuarant",
                newName: "restuarants");

            migrationBuilder.AddPrimaryKey(
                name: "PK_restuarants",
                table: "restuarants",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_restuarants",
                table: "restuarants");

            migrationBuilder.RenameTable(
                name: "restuarants",
                newName: "restuarant");

            migrationBuilder.AddPrimaryKey(
                name: "PK_restuarant",
                table: "restuarant",
                column: "Id");
        }
    }
}
