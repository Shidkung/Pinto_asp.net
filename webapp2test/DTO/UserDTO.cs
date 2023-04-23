namespace webapp2test.DTO
{
    public class UserDTO
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Phone { get; set; }
    }

    public class LoginDTO {
        public string Username { get; set; } = null!;

        public string password { get; set; } = null!;

    }
}
