using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using DesignPattern.IteratorPattern;
namespace DesignPatternTest
{
    [TestClass]
    public class IteratorTest
    {
        [TestMethod]
        public void Main()
        {
            var bookShelf = new BookShelf();
            bookShelf.AppendBook(new Book { Name = "Bible" });
            bookShelf.AppendBook(new Book { Name = "TOEIC TEST" });
            bookShelf.AppendBook(new Book { Name = "CARRER BOOK" });

            var iterator = bookShelf.GetIterator();
            while (iterator.HasNext)
            {
                var book = (Book)iterator.Next();
                Console.WriteLine(book.Name);
            }
        }
    }
}
