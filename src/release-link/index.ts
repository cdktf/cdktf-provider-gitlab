// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Relative path for a [Direct Asset link](https://docs.gitlab.com/ee/user/project/releases/index.html#permanent-links-to-release-assets).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#filepath ReleaseLink#filepath}
  */
  readonly filepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#id ReleaseLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of the link. Valid values are `other`, `runbook`, `image`, `package`. Defaults to other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#link_type ReleaseLink#link_type}
  */
  readonly linkType?: string;
  /**
  * The name of the link. Link names must be unique within the release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#name ReleaseLink#name}
  */
  readonly name: string;
  /**
  * The ID or [URL-encoded path of the project](https://docs.gitlab.com/ee/api/index.html#namespaced-path-encoding).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#project ReleaseLink#project}
  */
  readonly project: string;
  /**
  * The tag associated with the Release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#tag_name ReleaseLink#tag_name}
  */
  readonly tagName: string;
  /**
  * The URL of the link. Link URLs must be unique within the release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#url ReleaseLink#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link gitlab_release_link}
*/
export class ReleaseLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_release_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseLink to import
  * @param importFromId The id of the existing ReleaseLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_release_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/release_link gitlab_release_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseLinkConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_release_link',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.6.1',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filepath = config.filepath;
    this._id = config.id;
    this._linkType = config.linkType;
    this._name = config.name;
    this._project = config.project;
    this._tagName = config.tagName;
    this._url = config.url;
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

  // filepath - computed: false, optional: true, required: false
  private _filepath?: string; 
  public get filepath() {
    return this.getStringAttribute('filepath');
  }
  public set filepath(value: string) {
    this._filepath = value;
  }
  public resetFilepath() {
    this._filepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filepathInput() {
    return this._filepath;
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

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getNumberAttribute('link_id');
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filepath: cdktf.stringToTerraform(this._filepath),
      id: cdktf.stringToTerraform(this._id),
      link_type: cdktf.stringToTerraform(this._linkType),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tag_name: cdktf.stringToTerraform(this._tagName),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filepath: {
        value: cdktf.stringToHclTerraform(this._filepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_type: {
        value: cdktf.stringToHclTerraform(this._linkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
