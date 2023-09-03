import useSwitchTheme from '@/app/_utils/theme';
import {
  User,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

import { GrMoreVertical } from 'react-icons/gr';
import { TbLogout2 } from 'react-icons/tb';
import {
  BsFillPersonFill,
  BsMoonStarsFill,
  BsFillSunFill,
  BsBellFill,
  BsSearch,
} from 'react-icons/bs';
import {
  IoSettingsSharp,
  IoGameController,
} from 'react-icons/io5';
import { useTheme } from 'next-themes';
import React from 'react';
import MenuTab from './HeaderItem';

const headerItemList = [
  {
    name: 'タイムライン',
    icon: <IoGameController />,
    url: '/home',
  },
  {
    name: '通知',
    icon: <BsBellFill />,
    url: '/notification',
  },
  {
    name: '検索',
    icon: <BsSearch />,
    url: '/search',
  },
];

const headerReactNodeList: React.ReactNode[] = [];
headerItemList.forEach((headerItem) => {
  headerReactNodeList.push(
    <MenuTab
      name={headerItem.name}
      icon={headerItem.icon}
      url={headerItem.url}
    />
  );
});

const Header = () => {
  const { theme } = useTheme();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <header className="header bg-overlay border-slate-600">
      <div className="header__items">
        {headerReactNodeList}
      </div>
      <Dropdown>
        <DropdownTrigger>
          <div className="header__icon">
            <div className="header__icon__pc rounded-lg my-2 py-2 px-3 hover:bg-white/[.06]">
              <User
                name="Junior Garcia"
                classNames={{
                  wrapper: 'pl-3',
                  description: 'text-primary',
                }}
                description="@jrgarciadev"
                avatarProps={{
                  src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
                }}
              />
              <GrMoreVertical size={20} />
            </div>
            <Avatar
              className="my-2 w-8 h-8 header__icon__sm"
              src="https://avatars.githubusercontent.com/u/30373425?v=4"
              size="md"
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          aria-label="Static Actions"
        >
          <DropdownItem
            key="profile"
            startContent={<BsFillPersonFill />}
          >
            プロフィール
          </DropdownItem>
          <DropdownItem
            onPress={onOpen}
            key="edit"
            startContent={<IoSettingsSharp />}
          >
            アカウント設定
          </DropdownItem>
          <DropdownItem
            key="copy"
            onClick={useSwitchTheme()}
            startContent={
              theme === 'dark' ? (
                <BsFillSunFill />
              ) : (
                <BsMoonStarsFill />
              )
            }
          >
            テーマ変更
          </DropdownItem>
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            startContent={<TbLogout2 />}
          >
            ログアウト
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="sm"
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                アカウント設定
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque
                  sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque
                  sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque
                  sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Header;
