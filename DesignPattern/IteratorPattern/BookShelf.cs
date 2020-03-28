using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.IteratorPattern
{
    public class BookShelf : IAggregate
    {
        private readonly List<Book> books = new List<Book>();

        public int BookLength => books.Count;

        public void AppendBook(Book book)
        {
            books.Add(book);
        }

        public Book GetBookAt(int index)
        {
            return books[index];
        }

        public IIterator GetIterator()
        {
            return new BookShelfIterator(this);
        }
    }
}
