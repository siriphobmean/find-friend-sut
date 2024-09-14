import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../service/friend/friend.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; 
import { userInterface } from '../../interfaces/user.model';

@Component({
  selector: 'app-friend-info',
  templateUrl: './friend-info.component.html',
  styleUrls: ['./friend-info.component.css']
})
export class FriendInfoComponent implements OnInit {

  filteredUser: userInterface[] = []; // ใช้ interface Friend
  selectedInstitute: string = 'เพื่อนทั้งหมด'; // Default is to show all friends
  search: string = '';
  selectedFriend: any = null;

  users: userInterface[] = [];
  userId1: string | null = "";
  userId2: string | null = "";
  objectID_user: string | null = "";

  constructor(private http: HttpClient, private fs: FriendService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.objectID_user = localStorage.getItem("_id");
    console.log('Object ID User:', this.objectID_user);
    this.route.paramMap.subscribe((params) => {
      this.userId2 = params.get("id")!; // รับค่า userId1 จาก URL
    });
    this.fetchUsersData();
  }

  fetchUsersData(): void {
    this.fs.getAllUser().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUser = this.users;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
    this.applyFilter();
  }

  pendingFriend(user1: any): void {
    if (user1 && user1._id) {
      this.userId1 = user1._id;  // ดึงค่า _id ของ user2
    } else {
      console.error('User1 does not have _id');
      return;
    }

    if (!this.userId1 || !this.objectID_user) {
      console.error('User IDs are required');
      return;
    }
  
    // เรียกใช้ฟังก์ชัน addFriends หลังจากตรวจสอบว่า _id ถูกต้อง
    this.fs.addFriends(this.userId1, this.objectID_user).subscribe(
      response => {
        console.log('Add friend successfully:', response);
        this.fetchUsersData();
      },
      error => {
        console.error('Error add friend:', error);
      }
    );
  }
  

  // ฟังก์ชันค้นหาเพื่อน
  onSearchFriend(): void {
    this.applyFilter(); // กรองข้อมูลเพื่อนเมื่อทำการค้นหา
  }

  // ฟังก์ชันกรองเพื่อนตามสถาบัน
  onFilterInstitute(institute: string): void {
    this.selectedInstitute = institute;
    this.applyFilter(); // เรียกฟังก์ชันกรองข้อมูล
  }  

  // ฟังก์ชันกรองข้อมูล
  applyFilter(): void {
    this.filteredUser = this.users.filter((user) => {
      const matchesInstitute = this.selectedInstitute === 'เพื่อนทั้งหมด' || user.institute === this.selectedInstitute;
      const matchesSearch = !this.search || user.name.toLowerCase().includes(this.search.toLowerCase());
      return matchesInstitute && matchesSearch;
    });
  }

  isPendingRequest(item: any): boolean {
    return item.status === 'pending'; // Assuming 'status' field contains the friend request status
  }

  openFriendModal(friend: any): void {
    this.selectedFriend = friend; // Set the selected friend's details
    console.log(this.selectedFriend);
  }

  closeModal(): void {
    this.selectedFriend = null; // Close the modal by setting selectedFriend to null
  }
}
