using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapp2test.Data.Migrations
{
    /// <inheritdoc />
    public partial class timessw : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "time",
                table: "Users",
                type: "text",
                rowVersion: true,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldRowVersion: true,
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "time",
                table: "Users",
                type: "timestamp with time zone",
                rowVersion: true,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldRowVersion: true);
        }
    }
}
