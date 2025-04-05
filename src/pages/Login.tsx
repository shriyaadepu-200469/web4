
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginProps {
  onLogin: (userType: 'student' | 'organizer') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'student' | 'organizer'>('student');
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    // In a real app, this would make an API call for authentication
    console.log('Login values:', values, 'User type:', userType);
    
    // Simulate login success
    toast.success(`${userType === 'student' ? 'Student' : 'Organizer'} login successful!`);
    
    // Call the onLogin function to update authentication state
    onLogin(userType);
    
    // Redirect based on user type
    if (userType === 'student') {
      navigate('/dashboard');
    } else {
      navigate('/organizer-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-campus-600">CampusEvents</h1>
          <p className="text-gray-500 mt-2">Connect, participate, and grow with campus events</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Login form */}
          <Card className="shadow-lg border-t-4 border-t-campus-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
              <CardDescription>
                Access your CampusEvents account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="student" className="w-full" onValueChange={(value) => setUserType(value as 'student' | 'organizer')}>
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="student">Student</TabsTrigger>
                  <TabsTrigger value="organizer">Event Organizer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="student">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="student@university.edu" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Remember me</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <div>
                        <Button type="submit" className="w-full bg-campus-600 hover:bg-campus-700">
                          Sign In as Student
                        </Button>
                      </div>
                      
                      <div className="text-center mt-4">
                        <a href="#" className="text-sm text-campus-600 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="organizer">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="organizer@university.edu" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Remember me</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <div>
                        <Button type="submit" className="w-full bg-campus-600 hover:bg-campus-700">
                          Sign In as Organizer
                        </Button>
                      </div>
                      
                      <div className="text-center mt-4">
                        <a href="#" className="text-sm text-campus-600 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <a href="#" className="text-campus-600 font-medium hover:underline">
                  Sign up
                </a>
              </p>
            </CardFooter>
          </Card>
          
          {/* Right side: Features/Benefits */}
          <div className="flex flex-col space-y-6">
            <Card className="bg-gradient-to-br from-campus-600 to-campus-800 text-white shadow-lg">
              <CardHeader>
                <CardTitle>Welcome to CampusEvents</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The ultimate platform for all your campus event needs.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Discover & register for events</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Earn points & badges</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Build your campus network</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Organize & promote events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">For Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Discover events, build your network, and enhance your campus experience.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">For Organizers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Create and manage events, track participation, and gather feedback.</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Campus Engagement Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  CampusEvents is designed to connect students with meaningful experiences 
                  while helping organizations reach their target audience effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
