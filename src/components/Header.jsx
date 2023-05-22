import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { toogleTheme } from '../store/theme(deprecated)/theme-actions';
import { clearControls } from '../store/controls/controls-actions';


const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Header = () => {
    const [localTheme, setLocalTheme] = useState(JSON.parse(localStorage.getItem('theme')) || '')
    const dispatch = useDispatch()
    const cleanUp = () => dispatch(clearControls())

    useEffect(() => {
        document.body.setAttribute('data-theme', localTheme);
        localStorage.setItem('theme', JSON.stringify(localTheme))
    }, [localTheme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title onClick={cleanUp}>Where is the world?</Title>
                    {/* <ModeSwitcher onClick={() => dispatch(toogleTheme(theme === 'light' ? 'dark' : 'light'))}> */}
                    <ModeSwitcher onClick={() => setLocalTheme(localTheme === 'light' ? 'dark' : 'light')}>
                        {localTheme === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                            <IoMoon size="14px" />
                        )}{' '}
                        <span style={{ marginLeft: '0.75rem' }}>{localTheme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
