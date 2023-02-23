# `releaseLink` Submodule <a name="`releaseLink` Submodule" id="@cdktf/provider-gitlab.releaseLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReleaseLink <a name="ReleaseLink" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/release_link gitlab_release_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/releaselink"

releaselink.NewReleaseLink(scope Construct, id *string, config ReleaseLinkConfig) ReleaseLink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig">ReleaseLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig">ReleaseLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetFilepath">ResetFilepath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetLinkType">ResetLinkType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilepath` <a name="ResetFilepath" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetFilepath"></a>

```go
func ResetFilepath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetId"></a>

```go
func ResetId()
```

##### `ResetLinkType` <a name="ResetLinkType" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.resetLinkType"></a>

```go
func ResetLinkType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/releaselink"

releaselink.ReleaseLink_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/releaselink"

releaselink.ReleaseLink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/releaselink"

releaselink.ReleaseLink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.directAssetUrl">DirectAssetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.external">External</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.linkId">LinkId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.filepathInput">FilepathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.linkTypeInput">LinkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.tagNameInput">TagNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.filepath">Filepath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.linkType">LinkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectAssetUrl`<sup>Required</sup> <a name="DirectAssetUrl" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.directAssetUrl"></a>

```go
func DirectAssetUrl() *string
```

- *Type:* *string

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.external"></a>

```go
func External() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.linkId"></a>

```go
func LinkId() *f64
```

- *Type:* *f64

---

##### `FilepathInput`<sup>Optional</sup> <a name="FilepathInput" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.filepathInput"></a>

```go
func FilepathInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkTypeInput`<sup>Optional</sup> <a name="LinkTypeInput" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.linkTypeInput"></a>

```go
func LinkTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.tagNameInput"></a>

```go
func TagNameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Filepath`<sup>Required</sup> <a name="Filepath" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.filepath"></a>

```go
func Filepath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkType`<sup>Required</sup> <a name="LinkType" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.linkType"></a>

```go
func LinkType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.releaseLink.ReleaseLink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseLinkConfig <a name="ReleaseLinkConfig" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/releaselink"

&releaselink.ReleaseLinkConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Project: *string,
	TagName: *string,
	Url: *string,
	Filepath: *string,
	Id: *string,
	LinkType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the link. Link names must be unique within the release. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.project">Project</a></code> | <code>*string</code> | The ID or [URL-encoded path of the project](https://docs.gitlab.com/ee/api/index.html#namespaced-path-encoding). |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.tagName">TagName</a></code> | <code>*string</code> | The tag associated with the Release. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.url">Url</a></code> | <code>*string</code> | The URL of the link. Link URLs must be unique within the release. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.filepath">Filepath</a></code> | <code>*string</code> | Relative path for a [Direct Asset link](https://docs.gitlab.com/ee/user/project/releases/index.html#permanent-links-to-release-assets). |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#id ReleaseLink#id}. |
| <code><a href="#@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.linkType">LinkType</a></code> | <code>*string</code> | The type of the link. Valid values are `other`, `runbook`, `image`, `package`. Defaults to other. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the link. Link names must be unique within the release.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#name ReleaseLink#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or [URL-encoded path of the project](https://docs.gitlab.com/ee/api/index.html#namespaced-path-encoding).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#project ReleaseLink#project}

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.tagName"></a>

```go
TagName *string
```

- *Type:* *string

The tag associated with the Release.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#tag_name ReleaseLink#tag_name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the link. Link URLs must be unique within the release.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#url ReleaseLink#url}

---

##### `Filepath`<sup>Optional</sup> <a name="Filepath" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.filepath"></a>

```go
Filepath *string
```

- *Type:* *string

Relative path for a [Direct Asset link](https://docs.gitlab.com/ee/user/project/releases/index.html#permanent-links-to-release-assets).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#filepath ReleaseLink#filepath}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#id ReleaseLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkType`<sup>Optional</sup> <a name="LinkType" id="@cdktf/provider-gitlab.releaseLink.ReleaseLinkConfig.property.linkType"></a>

```go
LinkType *string
```

- *Type:* *string

The type of the link. Valid values are `other`, `runbook`, `image`, `package`. Defaults to other.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/release_link#link_type ReleaseLink#link_type}

---


