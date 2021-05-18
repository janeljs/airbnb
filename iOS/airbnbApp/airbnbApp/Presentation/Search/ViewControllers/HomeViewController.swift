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
    
    enum Section: Int, CaseIterable {
        case heroImage
        case near
        case category
        
        var sectionHeader: String {
            switch self {
            case .heroImage: return ""
            case .near: return "가까운 여행지 둘러보기"
            case .category: return "어디에서나, 여행은 살아보는거야!"
            }
        }
    }
    
    enum DataItem: Hashable {
        case notice(String)
        case near(String)
        case category(String)
    }
    
    enum SupplementaryElementKind {
        static let sectionHeader = "supplementary-section-header"
    }
    
    private var datasource: UICollectionViewDiffableDataSource<Section, DataItem>!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.titleView = roomSearchBar
        configureCollectionView()
    }
    
    private func configureCollectionView() {
        collectionView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    }
}

