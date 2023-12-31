import React from 'react';
import "../styles/PremeetingComponent.scss";
import MicrofrontendComponent from '../MicrofrontendComponent';
import MicrofrontendComponent2 from '../MicrofrontendComponent2';
import MicrofrontendComponent3 from '../MicrofrontendComponent3';


import { Fragment, useCallback, useState } from 'react';
import { token } from '@atlaskit/tokens';
import Button from '@atlaskit/button';

import {
  Content,
  Main,
  PageLayout,
  RightSidebar,
  LeftSidebar,
  LeftSidebarState,
} from '@atlaskit/page-layout';

import {
  ScrollableContent,
  SlotLabel,
  SlotWrapper,
  Toggle,
  ToggleBox,
  ExpandLeftSidebarKeyboardShortcut,
} from '../resources';

type SlotName =
  | 'LeftSidebar'
  | 'Main'
  | 'RightSidebar'
  | 'PageLayout';

const initialState = {
  isLeftSidebarShown: true,
  isLeftSidebarFixed: true,
  isLeftSidebarScrollable: false,
  isMainShown: true,
  isRightSidebarShown: true,
  isMainScrollable: true,
  isMainExtraWide: false,
  isRightSidebarFixed: false,
  isRightSidebarScrollable: false,
  isPageLayoutShown: true,
};



/***************************************************************************************************************+*/
const PremeetingComponent = () => {
  const [gridState, setGridState] = useState(initialState);

  const ToggleFixed = useCallback(
    ({ slotName }: { slotName: SlotName }) => {
      const gridKey = `is${slotName}Fixed` as keyof typeof gridState;
      return (
        <Toggle
          id={`${slotName}--fixed`}
          isChecked={gridState[gridKey]}
          onChange={() =>
            setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })
          }
        >
          Toggle fixed
        </Toggle>
      );
    },
    [gridState],
  );

  const ToggleScrollable = useCallback(
    ({ slotName }: { slotName: SlotName }) => {
      const gridKey = `is${slotName}Scrollable` as keyof typeof gridState;
      return (
        <Fragment>
          <Toggle
            data-toggle-scrollable
            id={`${slotName}--scrollable`}
            isChecked={gridState[gridKey]}
            onChange={() =>
              setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })
            }
          >
            Toggle scrollable content
          </Toggle>
          {gridState[gridKey] && <ScrollableContent />}
        </Fragment>
      );
    },
    [gridState],
  );

  const ToggleShown = useCallback(
    ({ slotName }: { slotName: SlotName }) => {
      const gridKey = `is${slotName}Shown` as keyof typeof gridState;
      return (
        <Toggle
          id={`${slotName}--shown`}
          onChange={() =>
            setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })
          }
          isChecked={gridState[gridKey] !== initialState[gridKey]}
        >{`${gridState[gridKey] ? 'Unmount' : 'Mount'} ${slotName}`}</Toggle>
      );
    },
    [gridState],
  );

  const ToggleExtraWide = useCallback(
    () => (
      <Fragment>
        <Toggle
          id={`toggle--extra-wide`}
          onChange={() =>
            setGridState({
              ...gridState,
              isMainExtraWide: !gridState.isMainExtraWide,
            })
          }
          isChecked={gridState.isMainExtraWide}
        >
          Toggle extra-wide content
        </Toggle>
        {gridState.isMainExtraWide && (
          <img
            src="https://picsum.photos/seed/picsum/1600"
            alt="wide placeholder"
            title="wide placeholder image"
          />
        )}
      </Fragment>
    ),
    [gridState],
  );

  return (
    <Fragment>
      {gridState.isPageLayoutShown && (
        <PageLayout>
          <Content testId="content">



            {gridState.isLeftSidebarShown && (
              <LeftSidebar
                testId="left-sidebar"
                id="left-sidebar"
                skipLinkTitle="Project Navigation"
                isFixed={gridState.isLeftSidebarFixed}
                onResizeStart={(state: LeftSidebarState) =>
                  console.log('onResizeStart', state)
                }
                onResizeEnd={(state: LeftSidebarState) =>
                  console.log('onResizeEnd', state)
                }
                onFlyoutExpand={() => console.log('onFlyoutExpand')}
                onFlyoutCollapse={() => console.log('onFlyoutCollapse')}
                resizeGrabAreaLabel="Resize Current project sidebar"
                resizeButtonLabel="Current project sidebar"
                valueTextLabel="Width"
              // eslint-disable-next-line @repo/internal/react/no-unsafe-overrides

              >
                <MicrofrontendComponent2 />
              </LeftSidebar>
            )}








            {gridState.isMainShown && (
              <Main id="main" skipLinkTitle="Main">
                <SlotWrapper>
                  <SlotLabel>Main</SlotLabel>
                  {/* <ToggleScrollable slotName="Main" />
                  <Button onClick={() => setGridState({ ...gridState, isRightSidebarShown: !gridState.isRightSidebarShown })} appearance="primary">Abrir Chat</Button> */}
                  <MicrofrontendComponent3 />
                </SlotWrapper>
              </Main>
            )}









            {gridState.isRightSidebarShown && (
              <RightSidebar isFixed={gridState.isRightSidebarFixed} width={500}>
                <SlotWrapper borderColor={token('color.border.accent.green', 'darkgreen')}>
                  <SlotLabel>Salas de Chat</SlotLabel>
                  {/* <p>AQUI LLAMAR AL MICROFRONTEND DEL CHAT</p>*/}
                  <MicrofrontendComponent />

                </SlotWrapper>
              </RightSidebar>
            )}






          </Content>
        </PageLayout>
      )}
      <ToggleBox>
        <ToggleShown slotName="Main" />
        <Button onClick={() => setGridState({ ...gridState, isRightSidebarShown: !gridState.isRightSidebarShown })} appearance="primary">Abrir Chat</Button>
      </ToggleBox>
    </Fragment>
  );
};


/***************************************************************************************************************+*/
export default PremeetingComponent;


