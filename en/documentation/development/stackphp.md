---
layout: home
title: Development - Stack php
sidebar: development
lang: en
subnav: stackphp
---


<div class="page-header">
    <h1>Development : <small>Stack</small></h1>
</div>

Stack is a convention for composing HttpKernelInterface middlewares.

For more information about stack, see the website : [http://stackphp.com/](http://stackphp.com/)

Thelia integrates the stack builder. It lets you add how many middleware you want.

## How to add a new middleware

A middleware must be a service with a tag named ```stack_middleware```

Your class must have at least one argument in its constructor, this argument must be a HttpKernelInterface class and must not be declared as an argument in your service.
This argument is automatically map by the stack builder.

A priority can be set. By default, the priority is 0.

### Example 1

Here a really simple example. This middleware do nothing.


```
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernelInterface;

class PassThru implements HttpKernelInterface
{
    /**
     * @var \Symfony\Component\HttpKernel\HttpKernelInterface
     */
    protected $app;

    public function __construct(HttpKernelInterface $app)
    {
        $this->app = $app;
    }

    public function handle(Request $request, $type = self::MASTER_REQUEST, $catch = true)
    {
        return $this->app->handle($request, $type, $catch);
    }
}
```

Here the service definition :

```
<service id="stack.test" class="TestStack\Stack\PassThru">
    <tag name="stack_middleware" priority="100"/>
</service>
```

### Example 2

In this example we use the event dispatcher to dispatch a custom message.

```
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernelInterface;


class TestServices implements HttpKernelInterface
{
    protected $app;

    protected $dispatcher;

    public function __construct(HttpKernelInterface $app, EventDispatcherInterface $dispatcher)
    {
        $this->app = $app;
        $this->dispatcher = $dispatcher;
    }


    public function handle(Request $request, $type = self::MASTER_REQUEST, $catch = true)
    {
        $this->dispatcher->dispatch('event_name', new Event());
        return $this->app->handle($request, $type, $catch);
    }
}
```

Here is the service definition

```
<service id="stack.services" class="TestStack\Stack\TestServices">
    <argument type="service" id="event_dispatcher" />
    <tag name="stack_middleware" priority="100"/>
</service>
```