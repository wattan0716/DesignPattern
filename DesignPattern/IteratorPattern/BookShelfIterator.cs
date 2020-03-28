using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.IteratorPattern
{
    public class BookShelfIterator : IEnumerator<Book>
    {
        private readonly BookShelf bookShelf;

        private int index = 0;
        Book Current => bookShelf.GetBookAt(index);

        Book IEnumerator<Book>.Current => bookShelf.GetBookAt(index);

        object IEnumerator.Current => Current;

        public BookShelfIterator(BookShelf bookShelf)
        {
            this.bookShelf = bookShelf;
        }

        public bool MoveNext()
        {
            index++;
            return index < bookShelf.BookLength;
        }

        public void Reset()
        {
            index = 0;
        }

        public void Dispose()
        {

        }
    }
}
