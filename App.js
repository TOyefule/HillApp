import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const HillApp = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md p-6 shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Student Sign In</h2>
          <Button className="w-full bg-blue-600 text-white py-2">Sign in with TikTok</Button>
        </Card>
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-6">MOOC Online Learning University</h1>
      
      <div className="flex items-center gap-2 mb-6">
        <Input placeholder="Search courses or teachers..." className="flex-1" />
        <Button variant="outline"><Search className="w-5 h-5" /></Button>
      </div>
      
      <Tabs defaultValue="courses">
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((course) => (
              <Card key={course}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold">Course Title {course}</h2>
                  <p className="text-sm text-gray-500">Instructor: John Doe</p>
                  <Button className="mt-2 w-full">View Course</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="teachers">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((teacher) => (
              <Card key={teacher}>
                <CardContent className="p-4 flex items-center gap-4">
                  <Avatar className="w-12 h-12" />
                  <div>
                    <h2 className="text-lg font-semibold">Teacher {teacher}</h2>
                    <p className="text-sm text-gray-500">Expert in Subject {teacher}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HillApp;
