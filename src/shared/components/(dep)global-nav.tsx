"use client";
import Samurai from "@/assets/Samurai_Helmet_Icon.svg";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Menu, CircleX } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export type Item = {
  name: string;
  slug: string;
  description?: string;
};

const pages: { name: string; items: Item[] }[] = [
  {
    name: "News",
    items: [
      {
        name: "News Aggregator",
        slug: "",
        description: "Aggregated News from various sources",
      },
      {
        name: "Media",
        slug: "media",
        description: "Media from various sources",
      },
      {
        name: "Polls",
        slug: "polls",
        description: "Polls from various sources",
      },
    ],
  },
  {
    name: "Auth",
    items: [
      {
        name: "Sign In",
        slug: "sign-in",
        description: "Sign in to your account with a username and password",
      },
      {
        name: "Sign Up",
        slug: "sign-up",
        description: "Create a new account with a username and password",
      },
      {
        name: "Go Pro",
        slug: "go-pro",
        description: "Upgrade your account to Pro",
      },
    ],
  },
  {
    name: "Develop",
    items: [
      {
        name: "API",
        slug: "api",
        description:
          "Explore the API and learn how to use it in your own projects",
      },
      {
        name: "Bots",
        slug: "bots",
        description: "Create and manage your own bots",
      },
      {
        name: "Widgets",
        slug: "widgets",
        description: "Embed widgets in your own projects",
      },
    ],
  },
  {
    name: "Misc",
    items: [
      {
        name: "Roadmap",
        slug: "roadmap",
        description:
          "See what's coming up next and what we're working on right now",
      },
      {
        name: "Careers",
        slug: "careers",
        description: "Join our team and help us build the future",
      },
    ],
  },
];

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="bg-background fixed top-0 z-10 flex w-full flex-col border-b border-gray-800  lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800 justify-between">
      <div>
        <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
          <Link
            href="/"
            className="group flex flex-col w-full items-center justify-start p-4"
            onClick={close}
          >
            <Samurai className="w-1/2 h-1/2 mx-auto text-slate-100 group-hover:text-white" />
            <h4 className="font-semibold tracking-wide text-slate-100  group-hover:text-white">
              DCYPHER AI
            </h4>
          </Link>
        </div>
        <button
          type="button"
          className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="font-medium text-gray-100 group-hover:text-gray-400">
            Menu
          </div>
          {isOpen ? (
            <CircleX className="block w-6 text-gray-400" />
          ) : (
            <Menu className="block w-6 text-gray-400" />
          )}
        </button>
        <div
          className={clsx("overflow-y-auto lg:static lg:block", {
            "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
            hidden: !isOpen,
          })}
        >
          <nav className="space-y-6 px-2 pb-24 pt-5">
            {pages.map((section) => {
              return (
                <div key={section.name}>
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                    <div>{section.name}</div>
                  </div>

                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <GlobalNavItem
                        key={item.slug}
                        item={item}
                        close={close}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="flex justify-between p-4 z-50">
        <ModeToggle />
      </div>
    </div>
  );
}
