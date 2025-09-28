import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/auth/useAuth';
import { useTheme } from '../../ThemeProvider/Layer';

import Glass from '../../components/UI/glass/Glass';
import ButtonPrimary from '../../components/UI/ButtonPrimary/ButtonPrimary';

// Heroicons
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { Waves } from 'lucide-react';

const LoginPage = () => {
    const theme = useTheme();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate('/');
        } else {
            setError('Oops! Invalid email or password.');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-2 ">
            <div className="w-14 h-14 rounded-full bg-gradient-to-l  from-cyan-500 to-blue-500 flex items-center justify-center">
                <Waves className="w-8 h-8 text-white " />
                {/* Icon goes here */}
            </div>

            {/* Title */}
            <p className="text-4xl  bg-gradient-to-l  from-cyan-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
                Samudra-Darpan
            </p>

            <p className="text-center text-gray-400 text-md max-w-md pb-7">
                Marine Research & Fisheries Management
            </p>

            {/* Login Glass */}
            <Glass className="p-8 w-[500px] max-w-full rounded-2xl">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="flex flex-col gap-2 relative">
                        <p className="text-sm ">Email</p>
                        <div className="relative">
                            <EnvelopeIcon className="absolute w-5 h-5 top-2 left-2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Enter your email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    padding: `0.5rem 0.75rem 0.5rem 2.5rem`,
                                    borderRadius: theme.borderRadius.lg,
                                }}
                                className="placeholder-gray-400 bg-white/10 border border-gray-500 rounded-md w-full p-2 hover:border-gray-600 transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2 relative">
                        <p className="text-sm ">Password</p>
                        <div className="relative">
                            <LockClosedIcon className="absolute w-5 h-5 top-2 left-2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    padding: `0.5rem 0.75rem 0.5rem 2.5rem`,
                                    borderRadius: theme.borderRadius.lg,
                                }}
                                className="placeholder-gray-400 bg-white/10 border border-gray-500 rounded-md w-full p-2 hover:border-gray-600 transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Error */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Button */}
                    <ButtonPrimary
                        type="submit"
                        className="w-full h-[4vh] hover:scale-105 transition-all duration-200 bg-gradient-to-l  from-cyan-500 to-blue-500 flex items-center justify-center"
                    >
                        Sign in
                    </ButtonPrimary>
                </form>
                <div className="pt-6">
                    <div className="flex flex-col justify-center items-center w-full h-[10vh] bg-blue-800/20 p-4 rounded-2xl border border-blue-900 text-[#8EC5FF]">
                        <p className="font-semibold ">Demo Credentials:</p>
                        <p className="text-sm">Email: admin@samudra-darpan.com</p>
                        <p className="text-sm">Password: demo123</p>
                    </div>
                </div>
            </Glass>
        </div>
    );
};

export default LoginPage;
