using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.DecoratorPattern
{
    public class DecoratorComponent : IComponent
    {
        private readonly IComponent decoratedComponent;

        public DecoratorComponent(IComponent decoratedComponent)
        {
            this.decoratedComponent = decoratedComponent;
        }
        public void Something()
        {
            SomethingElse();
            decoratedComponent.Something();
        }

        public void SomethingElse()
        {

        }
    }
}
