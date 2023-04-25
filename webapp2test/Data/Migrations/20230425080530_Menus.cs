using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace webapp2test.Data.Migrations
{
    /// <inheritdoc />
    public partial class Menus : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "cafeterias");

            migrationBuilder.AddColumn<string>(
                name: "RestaurantName",
                table: "orders",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "RestaurantId",
                table: "menus",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "restaurant",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_restaurant", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_menus_RestaurantId",
                table: "menus",
                column: "RestaurantId");

            migrationBuilder.AddForeignKey(
                name: "FK_menus_restaurant_RestaurantId",
                table: "menus",
                column: "RestaurantId",
                principalTable: "restaurant",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_menus_restaurant_RestaurantId",
                table: "menus");

            migrationBuilder.DropTable(
                name: "restaurant");

            migrationBuilder.DropIndex(
                name: "IX_menus_RestaurantId",
                table: "menus");

            migrationBuilder.DropColumn(
                name: "RestaurantName",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "RestaurantId",
                table: "menus");

            migrationBuilder.CreateTable(
                name: "cafeterias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cafeterias", x => x.Id);
                });
        }
    }
}
