# `gitlab_project_tag`

Refer to the Terraform Registory for docs: [`gitlab_project_tag`](https://www.terraform.io/docs/providers/gitlab/r/project_tag).

# `projectTag` Submodule <a name="`projectTag` Submodule" id="@cdktf/provider-gitlab.projectTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectTag <a name="ProjectTag" id="@cdktf/provider-gitlab.projectTag.ProjectTag"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_tag gitlab_project_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectTag.ProjectTag.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

new projectTag.ProjectTag(scope: Construct, id: string, config: ProjectTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig">ProjectTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectTag.ProjectTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectTag.ProjectTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectTag.ProjectTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig">ProjectTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectTag.ProjectTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectTag.ProjectTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectTag.ProjectTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectTag.ProjectTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectTag.ProjectTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectTag.ProjectTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectTag.ProjectTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectTag.ProjectTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectTag.ProjectTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectTag.ProjectTag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-gitlab.projectTag.ProjectTag.resetMessage"></a>

```typescript
public resetMessage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectTag.ProjectTag.isConstruct"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

projectTag.ProjectTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectTag.ProjectTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectTag.ProjectTag.isTerraformElement"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

projectTag.ProjectTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectTag.ProjectTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectTag.ProjectTag.isTerraformResource"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

projectTag.ProjectTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectTag.ProjectTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.commit">commit</a></code> | <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList">ProjectTagCommitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.release">release</a></code> | <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList">ProjectTagReleaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.ref">ref</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.commit"></a>

```typescript
public readonly commit: ProjectTagCommitList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList">ProjectTagCommitList</a>

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.protected"></a>

```typescript
public readonly protected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.release"></a>

```typescript
public readonly release: ProjectTagReleaseList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList">ProjectTagReleaseList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectTag.ProjectTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectTagCommit <a name="ProjectTagCommit" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommit.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

const projectTagCommit: projectTag.ProjectTagCommit = { ... }
```


### ProjectTagConfig <a name="ProjectTagConfig" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

const projectTagConfig: projectTag.ProjectTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.name">name</a></code> | <code>string</code> | The name of a tag. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.project">project</a></code> | <code>string</code> | The ID or URL-encoded path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.ref">ref</a></code> | <code>string</code> | Create tag using commit SHA, another tag name, or branch name. This attribute is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_tag#id ProjectTag#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.message">message</a></code> | <code>string</code> | The message of the annotated tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of a tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_tag#name ProjectTag#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or URL-encoded path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_tag#project ProjectTag#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Create tag using commit SHA, another tag name, or branch name. This attribute is not available for imported resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_tag#ref ProjectTag#ref}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_tag#id ProjectTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-gitlab.projectTag.ProjectTagConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The message of the annotated tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_tag#message ProjectTag#message}

---

### ProjectTagRelease <a name="ProjectTagRelease" id="@cdktf/provider-gitlab.projectTag.ProjectTagRelease"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectTag.ProjectTagRelease.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

const projectTagRelease: projectTag.ProjectTagRelease = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ProjectTagCommitList <a name="ProjectTagCommitList" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

new projectTag.ProjectTagCommitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.get"></a>

```typescript
public get(index: number): ProjectTagCommitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProjectTagCommitOutputReference <a name="ProjectTagCommitOutputReference" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

new projectTag.ProjectTagCommitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.authoredDate">authoredDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.authorEmail">authorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.authorName">authorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.committedDate">committedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.committerEmail">committerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.committerName">committerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.parentIds">parentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.shortId">shortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommit">ProjectTagCommit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authoredDate`<sup>Required</sup> <a name="authoredDate" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.authoredDate"></a>

```typescript
public readonly authoredDate: string;
```

- *Type:* string

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

---

##### `committedDate`<sup>Required</sup> <a name="committedDate" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.committedDate"></a>

```typescript
public readonly committedDate: string;
```

- *Type:* string

---

##### `committerEmail`<sup>Required</sup> <a name="committerEmail" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.committerEmail"></a>

```typescript
public readonly committerEmail: string;
```

- *Type:* string

---

##### `committerName`<sup>Required</sup> <a name="committerName" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.committerName"></a>

```typescript
public readonly committerName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `parentIds`<sup>Required</sup> <a name="parentIds" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.parentIds"></a>

```typescript
public readonly parentIds: string[];
```

- *Type:* string[]

---

##### `shortId`<sup>Required</sup> <a name="shortId" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.shortId"></a>

```typescript
public readonly shortId: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectTag.ProjectTagCommitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectTagCommit;
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectTag.ProjectTagCommit">ProjectTagCommit</a>

---


### ProjectTagReleaseList <a name="ProjectTagReleaseList" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

new projectTag.ProjectTagReleaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.get"></a>

```typescript
public get(index: number): ProjectTagReleaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProjectTagReleaseOutputReference <a name="ProjectTagReleaseOutputReference" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer"></a>

```typescript
import { projectTag } from '@cdktf/provider-gitlab'

new projectTag.ProjectTagReleaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.projectTag.ProjectTagRelease">ProjectTagRelease</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectTag.ProjectTagReleaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectTagRelease;
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectTag.ProjectTagRelease">ProjectTagRelease</a>

---



