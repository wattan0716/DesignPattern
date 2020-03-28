using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.IteratorPattern
{
    public class BookShelf : IEnumerable<Book>
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

        public IEnumerator<Book> GetEnumerator()
        {
            return new BookShelfIterator(this);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
