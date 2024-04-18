import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CitizenComplaintRecord } from "../citizen-complaint.model";

const URL = 'http://localhost:5136/CitizenComplaint';

@Injectable({
    providedIn: 'root'
})
export default class ComplaintService {
    constructor(private _httpClient: HttpClient){}

    add(complaint: CitizenComplaintRecord){
        return this._httpClient.post<CitizenComplaintRecord>(URL, complaint);
    }
}