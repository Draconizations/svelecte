import { render, screen } from '@testing-library/svelte';
import Svelecte from '$lib/Svelecte.svelte';
import { sleep } from './_helpers';
import userEvent from '@testing-library/user-event';

// FUTURE: mock fetch

describe('fetch: onMount', () => {
  it('resolve \'init\' fetchMode automatically', async () => {
    const { component } = render(Svelecte, {
      fetch: 'http://localhost:5173/api/colors',
      fetchDebounceTime: 0
    });

    let fetchTriggered = false;
    component.$on('fetch', () => {
      fetchTriggered = true;
    });

    await sleep(300);

    expect(fetchTriggered).toBeTruthy();
  });

  it('no initial request on query mode', async () => {
    const { component } = render(Svelecte, {
      fetch: 'http://localhost:5173/api/colors?query=[query]',
      fetchDebounceTime: 0
    });

    let fetchTriggered = false;
    component.$on('fetch', () => {
      fetchTriggered = true;
    });

    await sleep(500);

    expect(fetchTriggered).toBeFalsy();
  });
});

describe('fetch:init', () => {
  it('properly set initial value while in list (v3 compatible) step I', async () => {
    const { component } = render(Svelecte, {
      fetch: 'http://localhost:5173/api/colors',
      fetchDebounceTime: 0,
      value: 'blue'
    });

    await sleep(300);

    expect(screen.queryByText('Blue')).toBeInTheDocument();

    component.$$set({ fetch: 'http://localhost:5173/api/colors-countries' });

    await sleep(1000);

    expect(screen.queryByText('Blue')).toBeInTheDocument();

  });

  it('properly set initial value while in list (v3 compatible) step II', async () => {
    const { component } = render(Svelecte, {
      fetch: 'http://localhost:5173/api/colors',
      fetchDebounceTime: 0,
      fetchMode: 'init',
      value: 'blue'
    });


    await sleep(300);

    expect(screen.queryByText('Blue')).toBeInTheDocument();

    component.$$set({ fetch: 'http://localhost:5173/api/countries' });
    await sleep(1000);

    screen.debug();
    expect(screen.queryByText('Blue')).not.toBeInTheDocument();
  });
});

describe('fetch:query', () => {
  it('fetch default value object', async () => {
    render(Svelecte, {
      fetch: 'http://localhost:5173/api/colors?query=[query]',
      fetchDebounceTime: 0,
      value: 'blue'
    });

    await sleep(300);

    expect(screen.queryByText('Blue')).toBeInTheDocument();
  });

  it('fetch default value object and change value property', async () => {
    const { component } = render(Svelecte, {
      fetch: 'http://localhost:5173/api/colors?query=[query]',
      fetchDebounceTime: 0,
      value: 'blue'
    });

    await sleep(300);

    expect(screen.queryByText('Blue')).toBeInTheDocument();

    component.refetchWith('red');

    await sleep(500);

    expect(screen.queryByText('Red')).toBeInTheDocument();
  });
});
