//
//  HomeViewController.swift
//  airbnbApp
//
//  Created by zombietux on 2021/05/17.
//

import UIKit

class HomeViewController: UIViewController {

    @IBOutlet weak var roomSearchBar: RoomSearchBar!
    @IBOutlet weak var collectionView: UICollectionView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.titleView = roomSearchBar
    }
}

