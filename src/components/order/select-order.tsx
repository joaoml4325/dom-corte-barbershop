import { WidthFull } from '@mui/icons-material';
import Select from 'react-select';

type Option = {
    value: string;
    label: string;
}

type Props = {
    options: Option[];
    placeholder: string;
    title: string;
    value: string | null;
    onChange: (value: string | null) => void;
}

const customStyles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: 'transparent',
        borderColor: state.isFocused ? 'var(--gold)' : '#333',
        borderRadius: '8px',
        minHeight: '48px',
        boxShadow: 'none',
        '&:hover': {
            borderColor: 'var(--gold)',
        },
    }),

    menu: (base: any) => ({
        ...base,
        animation: 'selectMenuOpen 180ms ease-out',
        transformOrigin: 'top center',
        backgroundColor: '#111',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: '300s'
    }),

    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isFocused ? '#eab308' : '#111',
        color: state.isFocused ? '#000' : '#fff',
        cursor: 'pointer',
        ':active': {
            backgroundColor: 'var(--yellow-light)',
            color: '#000'
        }
    }),

    singleValue: (base: any) => ({
        ...base,
        color: '#fff'
    }),

    placeholder: (base: any) => ({
        ...base,
        color: '#888',
    }),
}

export const SelectOrder = ({ 
    options,
    placeholder,
    title,
    value,
    onChange
}: Props) => {    
    const selectedOption = options.find(option => option.value === value) ?? null;
    
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h1>
            <Select
                instanceId={title}
                options={options}
                value={selectedOption}
                onChange={option => onChange(option?.value ?? null)}
                placeholder={placeholder}
                isSearchable={false}
                styles={customStyles}
                className="w-full md:w-150"
            />
        </div>
    );
}