# `dataGitlabCurrentUser` Submodule <a name="`dataGitlabCurrentUser` Submodule" id="@cdktf/provider-gitlab.dataGitlabCurrentUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabCurrentUser <a name="DataGitlabCurrentUser" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/current_user gitlab_current_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.Initializer"></a>

```typescript
import { dataGitlabCurrentUser } from '@cdktf/provider-gitlab'

new dataGitlabCurrentUser.DataGitlabCurrentUser(scope: Construct, id: string, config?: DataGitlabCurrentUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig">DataGitlabCurrentUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig">DataGitlabCurrentUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabCurrentUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isConstruct"></a>

```typescript
import { dataGitlabCurrentUser } from '@cdktf/provider-gitlab'

dataGitlabCurrentUser.DataGitlabCurrentUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformElement"></a>

```typescript
import { dataGitlabCurrentUser } from '@cdktf/provider-gitlab'

dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformDataSource"></a>

```typescript
import { dataGitlabCurrentUser } from '@cdktf/provider-gitlab'

dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.generateConfigForImport"></a>

```typescript
import { dataGitlabCurrentUser } from '@cdktf/provider-gitlab'

dataGitlabCurrentUser.DataGitlabCurrentUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabCurrentUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabCurrentUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabCurrentUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/current_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabCurrentUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.bot">bot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.globalId">globalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.globalNamespaceId">globalNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.groupCount">groupCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.publicEmail">publicEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bot`<sup>Required</sup> <a name="bot" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.bot"></a>

```typescript
public readonly bot: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `globalId`<sup>Required</sup> <a name="globalId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.globalId"></a>

```typescript
public readonly globalId: string;
```

- *Type:* string

---

##### `globalNamespaceId`<sup>Required</sup> <a name="globalNamespaceId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.globalNamespaceId"></a>

```typescript
public readonly globalNamespaceId: string;
```

- *Type:* string

---

##### `groupCount`<sup>Required</sup> <a name="groupCount" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.groupCount"></a>

```typescript
public readonly groupCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `publicEmail`<sup>Required</sup> <a name="publicEmail" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.publicEmail"></a>

```typescript
public readonly publicEmail: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabCurrentUserConfig <a name="DataGitlabCurrentUserConfig" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.Initializer"></a>

```typescript
import { dataGitlabCurrentUser } from '@cdktf/provider-gitlab'

const dataGitlabCurrentUserConfig: dataGitlabCurrentUser.DataGitlabCurrentUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabCurrentUser.DataGitlabCurrentUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



