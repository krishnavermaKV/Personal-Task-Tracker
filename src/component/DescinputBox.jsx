export function Codeinputbox({ label, placeholder, onChange, value, id }) {
    return (
        <div>
            <label htmlFor={id} className="text-sm font-medium text-left py-2 block">
                {label}
            </label>
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={700}
                rows={7} // Adjust rows as needed
                className="w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:bg-slate-200 bg-slate-100 transition-all resize-none"
            />
            <p className="text-xs text-gray-500 text-right">{value?.length || 0}/700</p>
        </div>
    );
}
