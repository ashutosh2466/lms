using Api.Models;

namespace Api.Data_Access
{
    public interface IDataAccess
    {
        int CreateUser(User user);
        bool IsEmailAvailable(string email);

        bool AuthenticateUser(string email,string password,out User? user);

        IList<Book> GetAllBooks();

        bool OrderBook(int userId, int bookId);
    }
}
