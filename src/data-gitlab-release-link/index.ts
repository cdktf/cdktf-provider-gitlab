// https://www.terraform.io/docs/providers/gitlab/d/release_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabReleaseLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/release_link#id DataGitlabReleaseLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/release_link#link_id DataGitlabReleaseLink#link_id}
  */
  readonly linkId: number;
  /**
  * The ID or [URL-encoded path of the project](https://docs.gitlab.com/ee/api/index.html#namespaced-path-encoding).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/release_link#project DataGitlabReleaseLink#project}
  */
  readonly project: string;
  /**
  * The tag associated with the Release.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/release_link#tag_name DataGitlabReleaseLink#tag_name}
  */
  readonly tagName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/release_link gitlab_release_link}
*/
export class DataGitlabReleaseLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_release_link";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/release_link gitlab_release_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabReleaseLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabReleaseLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_release_link',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.7.1',
        providerVersionConstraint: '~> 15.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._linkId = config.linkId;
    this._project = config.project;
    this._tagName = config.tagName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_asset_url - computed: true, optional: false, required: false
  public get directAssetUrl() {
    return this.getStringAttribute('direct_asset_url');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getBooleanAttribute('external');
  }

  // filepath - computed: true, optional: false, required: false
  public get filepath() {
    return this.getStringAttribute('filepath');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // link_id - computed: false, optional: false, required: true
  private _linkId?: number; 
  public get linkId() {
    return this.getNumberAttribute('link_id');
  }
  public set linkId(value: number) {
    this._linkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkIdInput() {
    return this._linkId;
  }

  // link_type - computed: true, optional: false, required: false
  public get linkType() {
    return this.getStringAttribute('link_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      link_id: cdktf.numberToTerraform(this._linkId),
      project: cdktf.stringToTerraform(this._project),
      tag_name: cdktf.stringToTerraform(this._tagName),
    };
  }
}
