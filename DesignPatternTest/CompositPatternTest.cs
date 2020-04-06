using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;
using DesignPattern.CompositPattern;

namespace DesignPatternTest
{
    [TestClass]
    public class CompositPatternTest
    {
        [TestMethod]
        public void Main()
        {
            var root = new Folder("root");
            var user = new Folder("user");
            var temp = new Folder("temp");
            var document = new Folder("document");

            var test = new File("test.xlsx");
            var sample = new File("sample.docx");
            var userName = new File("tanaka");

            root.AddEntry(user);
            root.AddEntry(temp);
            user.AddEntry(document);

            temp.AddEntry(test);
            document.AddEntry(sample);
            user.AddEntry(userName);

            root.Output(0);
        }
    }
}
