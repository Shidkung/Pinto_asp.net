using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapp2test.Data.Migrations
{
    /// <inheritdoc />
    public partial class Me : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_menus_restaurant_RestaurantId",
                table: "menus");

            migrationBuilder.DropIndex(
                name: "IX_menus_RestaurantId",
                table: "menus");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
    }
}
