using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.IteratorPattern
{
    public class BookShelfIterator : IIterator
    {
        private readonly BookShelf bookShelf;

        private int index = 0;

        public BookShelfIterator(BookShelf bookShelf)
        {
            this.bookShelf = bookShelf;
        }

        public bool HasNext
        {
            get => index < bookShelf.BookLength;
        }

        public object Next()
        {
            var book = bookShelf.GetBookAt(index);
            index++;
            return book;
        }
    }
}
