# `gitlab_service_custom_issue_tracker`

Refer to the Terraform Registory for docs: [`gitlab_service_custom_issue_tracker`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/service_custom_issue_tracker).

# `serviceCustomIssueTracker` Submodule <a name="`serviceCustomIssueTracker` Submodule" id="@cdktf/provider-gitlab.serviceCustomIssueTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCustomIssueTracker <a name="ServiceCustomIssueTracker" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/service_custom_issue_tracker gitlab_service_custom_issue_tracker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/servicecustomissuetracker"

servicecustomissuetracker.NewServiceCustomIssueTracker(scope Construct, id *string, config ServiceCustomIssueTrackerConfig) ServiceCustomIssueTracker
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig">ServiceCustomIssueTrackerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig">ServiceCustomIssueTrackerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/servicecustomissuetracker"

servicecustomissuetracker.ServiceCustomIssueTracker_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/servicecustomissuetracker"

servicecustomissuetracker.ServiceCustomIssueTracker_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/servicecustomissuetracker"

servicecustomissuetracker.ServiceCustomIssueTracker_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrlInput">IssuesUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrlInput">ProjectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrl">IssuesUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrl">ProjectUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IssuesUrlInput`<sup>Optional</sup> <a name="IssuesUrlInput" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrlInput"></a>

```go
func IssuesUrlInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProjectUrlInput`<sup>Optional</sup> <a name="ProjectUrlInput" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrlInput"></a>

```go
func ProjectUrlInput() *string
```

- *Type:* *string

---

##### `IssuesUrl`<sup>Required</sup> <a name="IssuesUrl" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrl"></a>

```go
func IssuesUrl() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProjectUrl`<sup>Required</sup> <a name="ProjectUrl" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrl"></a>

```go
func ProjectUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCustomIssueTrackerConfig <a name="ServiceCustomIssueTrackerConfig" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/servicecustomissuetracker"

&servicecustomissuetracker.ServiceCustomIssueTrackerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IssuesUrl: *string,
	Project: *string,
	ProjectUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.issuesUrl">IssuesUrl</a></code> | <code>*string</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.project">Project</a></code> | <code>*string</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.projectUrl">ProjectUrl</a></code> | <code>*string</code> | The URL to the project in the external issue tracker. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IssuesUrl`<sup>Required</sup> <a name="IssuesUrl" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.issuesUrl"></a>

```go
IssuesUrl *string
```

- *Type:* *string

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/service_custom_issue_tracker#issues_url ServiceCustomIssueTracker#issues_url}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/service_custom_issue_tracker#project ServiceCustomIssueTracker#project}

---

##### `ProjectUrl`<sup>Required</sup> <a name="ProjectUrl" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.projectUrl"></a>

```go
ProjectUrl *string
```

- *Type:* *string

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/service_custom_issue_tracker#project_url ServiceCustomIssueTracker#project_url}

---



