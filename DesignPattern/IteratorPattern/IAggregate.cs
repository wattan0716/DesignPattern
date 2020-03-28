using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.IteratorPattern
{
    public interface IAggregate
    {
        IIterator GetIterator();
    }
}
